const { env } = process;

if (env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

const hostname = require('os').hostname();

env.MYSQL_HOST = env.MYSQL_HOST || hostname;
env.MYSQL_PORT = env.MYSQL_PORT || 3306;

if (env.DATABASE_LOGGING === undefined) {
  env.DATABASE_LOGGING = false;
}

module.exports = {
  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  user: env.MYSQL_USER,
  pass: env.MYSQL_PASSWORD,
  dbname: env.MYSQL_DATABASE,
  logging: env.DATABASE_LOGGING !== 'false' ? console.log : false,
};

// console.log(module.exports);
