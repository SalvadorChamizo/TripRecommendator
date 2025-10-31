backend_dir = ./backend
gateway_dir = ./gateway
frontend_dir = ./frontend

all: up

up:
	docker compose up --build -d

down:
	docker compose down

backend-build:
	docker build -t backend ${backend_dir} 

backend-run:
	docker run -p 8080:8081 -d backend:latest

backend-test:
	curl -X POST http://localhost:8080/analyze -H "Content-Type: application/json" -d '{"text":"I want a tropical beach trip in Asia"}'

clean:
	docker system prune -a

ls:
	docker ps

.PHONY: all up down backend-build backend-run backend-test clean ls