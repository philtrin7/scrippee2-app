const dotEnvResult = require('dotenv').config()

const prod = process.env.NODE_ENV === 'production'

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

module.exports = {
  env: {
    REFRESH_TOKEN_URI: process.env.REFRESH_TOKEN_URI,
    COOKIE_NAME: process.env.COOKIE_NAME,
    PRISMA_SERVER_URI: process.env.PRISMA_SERVER_URI
  }
}

/* ### Important ####
For production, use the setting of environment variable at runtime example
https://github.com/zeit/next.js/tree/canary/examples/with-universal-configuration-runtime
*/