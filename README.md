# hrxp-api

API and backend for the HRX Project.

## Getting Started

- Run `npm i` from the command line
- Navigate to `db/config.example.js` and rename to `db/config.js`
- Insert the MongoURL into the appropiate spot
- Run `npm run dev`

## API documentation

The API is documented in [`server/openapi.yaml`](https://github.com/hrxp/api/blob/master/server/openapi.yaml). 

You can use Swagger UI to view the documentation by navigating to `/docs` while the API is running, and you can edit the OpenAPI documentation by executing `npm run openapi:edit`.
