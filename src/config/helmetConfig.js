export default {
  contentSecurityPolicy: {
    directives: {
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'js.arcgis.com',
        'blob:',
        'filesystem:',
      ],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'js.arcgis.com',
        'blob:',
      ],
      imgSrc: ["* data: 'unsafe-inline'"],
      objectSrc: ["'self' * 'unsafe-inline' 'unsafe-eval'"],
      mediaSrc: ["'self' * 'unsafe-inline' 'unsafe-eval'"],
      workerSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'blob:'],
      connectSrc: ['*', 'blob:', 'ws:', 'wss:', 'websocket.domain'],
    },
  },
  referrerPolicy: true,
};
