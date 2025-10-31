import { GoogleGenAI } from "@google/genai"
import axios from "axios";
import serviceAccount from "/app/ft-transcendence-473815-5671a382a4e0.json"

const genAI = new GoogleGenAI({ credentials: serviceAccount});

export async function analyzeText(text: string) {
    
    console.log("gemini_api:", process.env.GEMINI_API_KEY);
    try {
        const result = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `You are a travel assistant.
                            Given this text about travel desires: "${text}"
                            Extract up to 3 travel destinations as JSON:
                            [
                                { "name": string, "country": string, "type": string }
                            ]
                            Only return JSON, no explanations.`,
                        },
                    ],
                },
            ],
        });
    
            const content = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
            const jsonMatch = content.match(/\[.*\]|\{.*\}/s);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
    
            throw new Error("No valid JSON found");
        
    } catch (err) {
        console.error("Could not parse AI response:", err);
        return [{ name: "Unknown", country: "Unknown", type: "Unknown" }];
    }
}

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

export async function geocodeDestination(location: string) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${MAPBOX_TOKEN}`;

    const { data } = await axios.get(url);

    if (data.features && data.features.length > 0) {
        const place = data.features[0];
        return {
            name: place.text,
            coordinates: place.geometry.coordinater,
        };
    }

    return { name: location, coordinates: null};
}