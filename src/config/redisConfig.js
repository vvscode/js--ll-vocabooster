const { env } = process;

if (env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}
const hostname = require('os').hostname();

env.REDIS_HOST = env.REDIS_HOST || hostname;
env.REDIS_PORT = env.REDIS_PORT || 6379;

module.exports = {
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
  pass: env.REDIS_PASSWORD || false,
  db: env.REDIS_DATABASE || 0,
};
