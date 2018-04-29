import path from 'path';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import config from '../config';
import publicApi from './api/public/index';

import initialRender from './middlewares/initialRender';

const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(compression());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------
/**
 * Applciation Routes
 */
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get(['/home'], (req, res, next) => {
  next();
});

/**
 * Register API middleware
 */

// public facing api for push updates
app.use('/pub', publicApi);

// page initial rendering
app.get('*', initialRender);

app.listen(config.port, () => {
  console.info(`The server is running at https://localhost:${config.port}/`);
});

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
}

export default app;
