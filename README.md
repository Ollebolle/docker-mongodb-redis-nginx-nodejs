# Docker / MongoDB / Redis / Nginx / NodeJS

This is a base project template for a REST API complete with database, reverse proxy, and backend.

## How to use

### Prerequisites

* Docker
* Docker Compose

### Development

Run in project root:
```
docker-compose up --build
```

### Production

Place your ssl certificates in the ```nginx/ssl-certificates/``` directory.

Run in project root:
```
docker-compose -f docker-compose.production.yml up --build
```

## ToDo

* Add authentication to MongoDB
