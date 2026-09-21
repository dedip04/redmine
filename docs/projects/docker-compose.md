# Project — Docker Compose Backend & MySQL

## Objective

Build a two-service application stack using Docker Compose.

## Requirements

- Backend service
- MySQL database
- Persistent Docker volume
- Shared Docker network

## Architecture

```text
              Docker Compose
                    │
          ┌─────────┴─────────┐
          │                   │
      Backend              MySQL
          │                   │
          └──── Docker Network┘
                              │
                         mysql_data
                           volume
```

## Verification

```bash
docker compose ps
docker volume ls
docker network ls
docker compose logs
```

## Result

The environment demonstrates container orchestration, service-to-service communication and persistent database storage.
