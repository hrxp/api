# hrxp-api

API and backend for the HRX Project.

## Getting Started

- Run `npm i`
- Run `cp .env.example .env`, then open `.env` and edit the values as needed
- Run `npm run dev`

## Environment variables

| Name                        | Description                                                                   | Required?              | Default |
|-----------------------------|-------------------------------------------------------------------------------|------------------------|---------|
| `MONGO_URL`                 | The MongoDB URL to use                                                        | **Yes**                |         |
| `SLACK_LOGIN_CLIENT_ID`     | Client ID that will be used for "Sign in with Slack" flow                     | **Yes**                |         |
| `SLACK_LOGIN_CLIENT_SECRET` | Client Secret that will be used for "Sign in with Slack" flow                 | **Yes**                |         |
| `SLACK_LOGIN_TEAM_ID`       | Team ID that will be used to ensure sign-ins come from the correct Slack team | **Yes**, in production |         |
| `JWT_SECRET`                | The secret used to sign JWTs                                                  | **Yes**, in production |         |
| `PORT`                      | The port to expose the API on                                                 | No                     | `3000`  |

In development, it's most convenient to set these variables in `.env`.

## API documentation

The API is documented in [`server/openapi.yaml`](https://github.com/hrxp/api/blob/master/server/openapi.yaml).

You can use Swagger UI to view the documentation by navigating to `/docs` while the API is running, and you can edit the OpenAPI documentation by executing `npm run openapi:edit`.
