const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const JWT = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'DevSecret';

/*
 * Get the JWT_SECRET from `process.env`.
 *
 * If we're in development, we'll tolerate the env var not being set
 * and simply use "DevSecret" instead, but in production we will
 * kill the entire server since auth can't work securely unless
 * we have a good JWT_SECRET set.
 *
 * More about JWTs: https://jwt.io/introduction/
 */
if (!process.env.JWT_SECRET) {
  console.warn(`WARNING: "process.env.JWT_SECRET" is not set.`);
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
}

/*
 * Routes
 */
router.get('/access_token', async (req, res) => {
  const { code } = req.query;

  // Via the Slack API, exchange the Slack Authorization Code coming from the
  // frontend for a Slack Access Token
  const accessTokenResponse = await axios.post(
    'https://slack.com/api/oauth.access',
    querystring.stringify({
      code: code,
      client_id: process.env.SLACK_LOGIN_CLIENT_ID,
      client_secret: process.env.SLACK_LOGIN_CLIENT_SECRET,
    })
  );

  if (!accessTokenResponse.data.ok) {
    // If our Slack API request fails, send the error back
    return res.status(500).send(accessTokenResponse.data);
  }

  const accessToken = accessTokenResponse.data.access_token;

  // Use our new Slack Access Token to get info about the user's Slack account
  const userIdentityResponse = await axios.post(
    'https://slack.com/api/users.identity',
    querystring.stringify({
      token: accessToken,
    })
  );

  // Create a new JWT with a payload that includes the user's Slack info
  const jwt = JWT.sign(
    {
      // JWT registered claims
      sub: userIdentityResponse.data.user.id,
      iss: 'hrxp_api',
      // our private claims
      email: userIdentityResponse.data.user.email,
      name: userIdentityResponse.data.user.name,
      image_72: userIdentityResponse.data.user.image_72,
    },
    JWT_SECRET,
    {
      expiresIn: '60d', // token will expire in 60 days
    }
  );

  res.send(jwt);
});

module.exports = router;
