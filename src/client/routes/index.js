/* eslint-disable global-require */
import React from 'react';
import { Redirect } from 'react-router';
import { AsyncPageLoader } from 'client/components/RouteComponents';

const routes = [
  {
    path: '/',
    exact: true,
    component: AsyncPageLoader('home'),
  },
  {
    path: '/home',
    component: AsyncPageLoader('home'),
    routes: [
      {
        path: '/home/',
        exact: true,
        component: AsyncPageLoader('home/root'),
      },
      {
        path: '/home/personal',
        exact: true,
        component: AsyncPageLoader('home/root'),
      },
      {
        path: '/home/tab1',
        key: '/home/tab1',
        component: () => (
          <div>
            <h4>Tab 1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero.
              <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>.
              Sed dignissim lacinia nunc.
            </p>

            <p>
              <b>Praesent mauris</b>. Curabitur tortor. Pellentesque nibh.
              <b>Fusce nec tellus sed augue semper porta</b>. Aenean quam. In
              scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique
              sem. <b>Vestibulum lacinia arcu eget nulla</b>. Proin ut ligula
              vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
              suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>

            <p>
              Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque
              adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.
              Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus
              consequat imperdiet. Vestibulum sapien. Proin quam. Etiam
              ultrices. Suspendisse in justo eu magna luctus suscipit. Sed
              lectus. Integer euismod lacus luctus magna.
            </p>

            <p>
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
              lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
              mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
              facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
              egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
              ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui
              quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia
              sollicitudin massa.
            </p>

            <p>
              Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.
              Quisque nisl felis, venenatis tristique, dignissim in, ultrices
              sit amet, augue. Proin sodales libero eget ante. Nulla quam.
              Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac,
              ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus
              quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at
              pede suscipit sodales. Aenean lectus elit, fermentum non,
              convallis id, sagittis at, neque. Nullam mauris orci, aliquet et,
              iaculis et, viverra vitae, ligula.
            </p>
          </div>
        ),
      },
      {
        path: '/home/tab2',
        key: '/home/tab2',
        component: () => (
          <div>
            <h4>Tab 2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla.
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Curabitur sodales ligula in
              libero.
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
              Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
              Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
              convallis tristique sem. Proin ut ligula vel nunc egestas
              porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus
              non, massa.
              <b>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos
              </b>. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.
              Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
              nibh. Quisque volutpat condimentum velit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis,
              tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
              Nulla facilisi. <b>Proin ut ligula vel nunc egestas porttitor</b>.
              Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus
              consequat imperdiet. Vestibulum sapien. Proin quam. Etiam
              ultrices. <b>Nam nec ante</b>. Suspendisse in justo eu magna
              luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
              lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
              mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
              facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
              egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
              ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui
              quis est pulvinar ullamcorper.
            </p>
          </div>
        ),
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
  {
    component: AsyncPageLoader('not-found'),
  },
];

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.push({
    path: '/error',
    component: AsyncPageLoader('error'),
  });
}

export default routes;
