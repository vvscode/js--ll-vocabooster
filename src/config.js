const { env } = process;

if (env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}
const hostname = require('os').hostname();

if (!(process.env.NODE_ENV_WORKAROUND === 'production')) {
  console.log('ENV: development');
  // add vars from .env to env
  const dotenv = require('dotenv').config(); // eslint-disable-line global-require
  if (dotenv.error) {
    require('dotenv').config({ path: '../../.env' }); // eslint-disable-line global-require
  }
}

env.APP_PORT = env.APP_PORT || 3000;

if (env.APP_BEHIND_PROXY === undefined) {
  env.APP_BEHIND_PROXY = false;
}
if (env.APP_OVER_HTTPS === undefined) {
  env.APP_OVER_HTTPS = false;
}
env.APP_PORT = env.APP_PORT || 3000;
env.API_CLIENT_URL = env.API_CLIENT_URL || '';
env.API_SERVER_URL = env.API_SERVER_URL || `http://${hostname}:${env.APP_PORT}`;

module.exports = {
  // Node.js app
  port: env.APP_PORT,
  behindProxy: !(env.APP_BEHIND_PROXY === 'false'),
  overHttps: !(env.APP_OVER_HTTPS === 'false'),
};
