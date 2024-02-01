const jwt = require('jsonwebtoken');
const jwtConfig = require('../middleware/configJWT');

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, 'A', {
    expiresIn: jwtConfig.access.expiresIn,
  }),
  refreshToken: jwt.sign(payload, 'R', {
    expiresIn: jwtConfig.refresh.expiresIn,
  }),
});

module.exports = generateTokens;
