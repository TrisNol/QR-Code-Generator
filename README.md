# QR-Code Generator

A minimal proof-of-concept (PoC) project that generates QR codes.

This repository contains a small Python backend that produces QR code images and an Angular frontend that demonstrates usage. It is intended as a simple demo — not production-ready.

**Repository layout**
- `backend/` : Python service (server code, requirements). Exposes a simple HTTP endpoint to generate QR codes.
- `frontend/` : Angular application that calls the backend and displays generated QR codes.
- `docker-compose.yml` : Optional convenience to build and run both services together using Docker.

**Quick Start (Docker Compose)**
1. Build and start both services:

```bash
docker compose up --build
```

2. When containers are running, open the frontend in your browser (the compose file maps ports; commonly `http://localhost:4200`). The frontend calls the backend to generate QR codes.

**Local Development**
- Backend (Python):
	- Create a virtual environment, install dependencies, and run the server:

	```bash
	cd backend
	python -m venv .venv
	source .venv/bin/activate
	pip install -r requirements.txt
	python app/server.py
	```

- Frontend (Angular):
	- Install dependencies and run the dev server:

	```bash
	cd frontend
	npm install
	npm run start
	# or: npx ng serve
	```

**Usage**
- Use the frontend UI to enter text/data and request a QR code, or call the backend HTTP endpoint directly to receive a generated QR image (check `backend/app/server.py` for the exact route).