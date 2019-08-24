const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const JWT = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'DevSecret';

if (!process.env.JWT_SECRET) {
  console.warn(`WARNING: "process.env.JWT_SECRET" is not set.`);
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
}

router.get('/access_token', async (req, res) => {
  const { code } = req.query;

  const accessTokenResponse = await axios.post(
    'https://slack.com/api/oauth.access',
    querystring.stringify({
      code: code,
      client_id: '671720357619.724476729541',
      client_secret: '2411807b3b25fbe2b78343b38ff430cd', // TODO: make this an env var
    })
  );

  if (!accessTokenResponse.data.ok) {
    return res.status(500).send(accessTokenResponse.data);
  }

  const accessToken = accessTokenResponse.data.access_token;

  const userIdentityResponse = await axios.post(
    'https://slack.com/api/users.identity',
    querystring.stringify({
      token: accessToken,
    })
  );

  const jwt = JWT.sign(
    {
      id: userIdentityResponse.data.user.id,
      email: userIdentityResponse.data.user.email,
      name: userIdentityResponse.data.user.name,
      image_72: userIdentityResponse.data.user.image_72,
    },
    JWT_SECRET
  );

  res.send(jwt);
});

module.exports = router;
