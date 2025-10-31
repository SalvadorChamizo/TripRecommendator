import { FastifyRequest, FastifyReply } from "fastify"
import { analyzeText, geocodeDestination } from "../services/backendServices"

export async function analyzeController(req: FastifyRequest, reply: FastifyReply) {
    const { text } = req.body as { text: string };

    if (!text) {
        reply.status(400).send({ error: "Missing 'text' field."});
        return ;
    }

    try {
        const destinations = await analyzeText(text);
        reply.send({ destinations });
    } catch (err: any) {
        console.log("text:", text);
        reply.status(500).send({ error: err.error || "Failed to analyze text" });
    }
}

export async function geocodeController(req: FastifyRequest, reply: FastifyReply) {
    const { location } = req.query as { location: string };

    if (!location) {
        reply.status(400).send({ error: "Missing 'location' parameter."});
        return ;
    }

    try {
        const coords = await geocodeDestination(location);
        reply.send(coords);
    } catch (err) {
        reply.status(500).send({ error: "Failed to geocode location" });
    }
}