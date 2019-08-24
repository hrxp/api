# hrxp-api

API and backend for the HRX Project.

## Getting Started

- Run `npm i`
- Run `cp .env.example .env`, then open `.env` and edit the values if needed
- Run `npm run dev`

## Environment variables

| Name         | Description                   | Required?              | Default     |
| ------------ | ----------------------------- | ---------------------- | ----------- |
| `MONGO_URL`  | The MongoDB URL to use        | **Yes**                | _undefined_ |
| `JWT_SECRET` | The secret used to sign JWTs  | **Yes**, in production | `3000`      |
| `PORT`       | The port to expose the API on | No                     | `3000`      |

## API documentation

The API is documented in [`server/openapi.yaml`](https://github.com/hrxp/api/blob/master/server/openapi.yaml). 

You can use Swagger UI to view the documentation by navigating to `/docs` while the API is running, and you can edit the OpenAPI documentation by executing `npm run openapi:edit`.
