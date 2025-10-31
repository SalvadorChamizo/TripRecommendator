import { FastifyInstance } from "fastify";
import { analyzeController, geocodeController } from "../controllers/backendControllers"

export default async function backendRoutes(app: FastifyInstance) {

    app.post("/analyze", analyzeController);
    app.get("/geocode", geocodeController);
}