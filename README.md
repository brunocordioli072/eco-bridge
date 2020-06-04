
## Description
Used:<br>
[Nest](https://github.com/nestjs/nest) TypeScript framework. <br>
[Docker](https://github.com/docker-library/docker) Containerization technology. <br>
[PostgreSQL](https://www.postgresql.org) Open source object-relational database. <br>

## Installation

Install [docker](https://docs.docker.com/engine/install/)

```bash
$ npm install
```

## Start Server

```bash
$ npm run start:dev:db
$ npm run typeorm:migration:generate -- init
$ npm run typeorm:migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Bruno Cordioli](https://www.linkedin.com/in/bruno-cordioli-machado-4b2a47180/)

