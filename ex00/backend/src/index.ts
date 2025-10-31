import Fastify from "fastify";
import dotenv from "dotenv";
import backendRoutes from "./routes/backendRoutes";

dotenv.config();

const app = Fastify({ logger: true });

app.register(backendRoutes);

const PORT = process.env.PORT || 8081;

app.listen({ port: Number(PORT), host: "0.0.0.0" })
    .then(() => console.log(`Backend-service listening at port ${PORT}`))