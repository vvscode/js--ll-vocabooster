/* eslint-disable global-require */
// import { AsyncPageLoader } from 'client/components/RouteComponents';
import getNotFound from 'client/routes/not-found';
import getAbout from 'client/routes/about';
import getHome from 'client/routes/home';
import getError from 'client/routes/error';

const routes = [
  {
    path: '/',
    exact: true,
    component: getHome().component,
  },
  {
    path: '/about',
    exact: true,
    component: getAbout().component,
  },
  {
    component: getNotFound().component,
  },
];

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.push({
    path: '/error',
    component: getError().component,
  });
}

export default routes;
