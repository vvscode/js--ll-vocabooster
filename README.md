## Getting Started

### Requirements

* Mac OS X, Windows, or Linux
* [Yarn](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v8.9.1 or newer
* Text editor or IDE pre-configured with React/JSX/Flow/ESlint ([learn more](./how-to-configure-text-editors.md))

### Root directory layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Static files which are copied into the /build/public folder
├── /src/                       # The source code of the application
│   ├── /client/                # Client side code
│   ├── /server/                # Express server code
│   ├── /config/                # Configs for different parts of app, like redis, mariaDb, s3
│   ├── /docker/                # Docker helper script
│   ├── /config.js              # Global application settings
├── /test/                      # Unit and end-to-end tests
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /postcss.config.js      # Configuration for transforming styles with PostCSS plugins
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
├── Dockerfile                  # Commands for building a Docker image for production
├── package.json                # The list of 3rd party libraries and utilities
└── yarn.lock                   # Fixed versions of all the dependencies
```

# Client directory layout

```
├── /components/                # The folder for common react components, used in different app routes
├── /containers/                # The folder for containers, which are not connected to specific route (Like Layout)
├── /redux/                     # Redux layer of the app, here should be all client business logic
├── /routes/                    # First level routes of the app
├── /services/                  # Api, Error handling services
├── /styles/                    # Main styles of the app, variables etc
├── /tools/                     # Build automation scripts and utilities
├── /utils                      # Some helper utils
├── client.js                   # Entry point of the client app
```

# Components

```
├── /Button/                    # Component root folder
    ├── /Button.component.js    # Source code of component
    ├── /Button.less            # Styles
    ├── /Button.test.js         # Unit tests
    ├── /index.js               # Import component and styles, exporting component
```

Note: to import component, just write import Button from 'components/Button';

Note 2: component shouldn't know anything about Redux store

# Containers

Containers are components connected to Redux store, so they can get some data from store or dispatch actions.

```
├── /Layout/                    # Containers root folder
    ├── /Layout.component.js    # Source code of component
    ├── /Layout.containers.js   # Connects component to store
    ├── /Layout.less            # Styles
    ├── /Layout.test.js         # Unit tests
    ├── /index.js               # Exporting connected component (container)
```

Layout is connected to store component. It should help to organize such things like error handling, showing some modals, notifications, localization swithcing etc
with help of corresponding redux layer.

# Routes

```
├── /Home/                      # Route root folder
│   ├── /components/            # Components, specific for current route
│   ├── /subroute/              # Subroute folder, will have the same structure, as root route folder
│   ├── /Home.component.js      # Source code of route main component
│   ├── /Home.containers.js     # Connects component to store, if needed
│   ├── /Home.less              # Styles
│   ├── /Home.test.js           # Unit tests
│   ├── /index.js               # Exporting route, or SubRoutesWrapper component for rendering child routes, if they exist
└── index.js                    # List of all routes in app with coresponding components, wraped into AsyncPageLoader  
```

AsyncPageLoader component is used for dynamic chunks loading.

# Redux

This is redux layer of the app, each entity (route or container), which is connected to redux, has corresponding folder here. All logic should be placed here.

```
├── /Layout/                    # Redux layer root folder
    ├── /types.js               # List of actions types
    ├── /actions.js/            # List of actions creators
    ├── /reducer.js             # Reducer for this part of the state
    ├── /index.js               # Exports all stuff together
    ├── ...                     # Anything alse, what can be usefull, like models, selectors, some utils for transforming state and so on
```

Each redux module exports objects, which contains all action creators, reducer function and module name.
Module name is used for combining reducer, and in containers for accesing their part of store.

In redux module's index.js:

```javascript
export default {
  actions,
  reducer,
  name: 'layout'
};
```

In redux/index.js (configuring store):

```javascript
import layout from './layout';

export const rootReducer = combineReducers({
  [layout.name]: layout.reducer
});
```

In container:

```javascript
import layout from 'client/redux/layout';

function mapStateToProps(state) {
  return state[layout.name];
}
```

# Services

BaseApi service containes implementation of GET, POST, PUT http requests.
InternalApi service extends BaseApi service, and containes requests methods for comunications with Express server. All requests to 3-d parties services are going through Express server.
InternalApi service is send as a parameter to action creator function through thunk middlware.

```javascript
function getUserProfile() {
  return async (dispatch, getState, services) => {
    const { Api, ErrorHandler } = services;

    try {
      await Api.getUserProfile();
      //do something with result
    } catch (err) {
      dispatch(ErrorHandler.addErrorToQueue(err));
    }
  };
}
```

ErrorHandler.addErrorToQueue method will dispatch action, which will add error object to store. Later it can be used by Layout container to show error messages from different modules.

# Styles

For styling we are using LESS + BEM

### Server directory layout

Server is used as proxy between client and microservices layer

```
├── /api/                       # Internal Api for handling client request, and public api for handling requests from 3-d party services to our app
├── /data/                      # Models for server side
├── /services/
├── /utils/
├── /validations/
├── server.js                   # Entry point of the server app
├── passport.js                 # Auth middleware
```
