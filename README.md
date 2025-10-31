# TripRecommendator

TripRecommendator is a small demo full‑stack app that accepts free‑text travel descriptions and returns suggested destinations. It uses:
- A frontend SPA (Vite) that collects user input.
- An NGINX gateway that serves the frontend and proxies API calls.
- A Fastify backend that calls an LLM (Gemini via `@google/genai`) to extract destinations and Mapbox to geocode them.

Prerequisites
- Docker & Docker Compose (or Docker CLI compatible)
- If running services locally without Docker: Node 20+, npm

Quick start (recommended: Docker Compose)
1. From repository root run:
   ```sh
   make up
   ```

This runs docker compose up --build -d (see ex00/Makefile) and starts the frontend, gateway and backend.

2. Open the app in a browser:
Gateway serves the frontend on http://localhost:8080 (see ex00/gateway/nginx.conf).
