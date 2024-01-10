# Authorization and Authentication API

An authentication and authorization API

## Tech Stack

- Node JS (TypeScript)
- Postgres
- Sequelize (ORM)
- Swagger Docs

## Running Locally

### Requirements

- Docker
- Docker-compose
- Sequelize CLI (>=v6.6.2)
- Make

### Create ENV file

```bash
cp .example.env .env
```

Example ENV values

```
PG_USER=scanwize
PG_PASSWORD=scanwize
PG_DB=scanwize
PG_HOST=pgdb # name of docker container running the db
JWT_SECRET=secret
JWT_EXPIRY=30
SALT_ROUNDS=10
```

### Start services

```bash
docker-compose up
```

### Run migrations

```bash
make migrate
```

### Generate seed data

```bash
make seed
```

### Create an account

To create an account use the register route as per the API docs

N/B: Seed data generates two roles: Admin and User. When creating an account, use the Roles route to
determine the respective roleIDs to be used during registration

Services can be accessed on:

API - http://localhost:3000/api/v1

Docs - http://localhost:7050
