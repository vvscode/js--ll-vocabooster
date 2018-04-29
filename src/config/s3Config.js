const { env } = process;

if (env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

if (env.S3_SSL_ENABLED === undefined) {
  env.S3_SSL_ENABLED = false;
}

if (env.S3_FORCE_PATH_STYLE === undefined) {
  env.S3_FORCE_PATH_STYLE = true;
}

module.exports = {
  endpoint: {
    // localhost
    host: env.S3_ENDPOINT_HOST || `http://localhost`,
    port: env.S3_ENDPOINT_PORT || '8000',
  },
  accessKeyId: env.S3_ACCESSKEY_ID || 'newAccessKey',
  secretAccessKey: env.S3_SECRET_ACCESS_KEY || 'newSecretKey',
  sslEnabled: !(env.S3_SSL_ENABLED === 'false'),
  s3ForcePathStyle: !(env.S3_FORCE_PATH_STYLE === 'false'),
};
