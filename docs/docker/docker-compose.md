# Docker Compose

## Goal

Run a backend service and MySQL database together.

Key requirements:

- 2 services
- Persistent MySQL volume
- Shared Docker network

Example structure:

```yaml
services:
  backend:
    build: .
    depends_on:
      - db
  db:
    image: mysql:8
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```
