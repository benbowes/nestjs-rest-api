# NestJS REST API

A CRUD REST API using the NestJS framework and MongoDB/Mongoose.

## Setup

Create a `.env` file in the root of the project with your mongodb uri

e.g.

```
DB_CONNECTION_STRING=mongodb+srv://<USERNAME>:<PASSWORD>@<URL>/<DATABASE_NAME>?retryWrites=true&w=majority
```

## Installation

```bash
$ npm install
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
