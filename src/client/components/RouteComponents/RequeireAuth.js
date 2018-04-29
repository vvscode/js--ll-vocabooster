import React from 'react';
import { Redirect } from 'react-router';
import { isLoggedIn } from 'client/utils/appData';

export default (component, redirectTo = '/') =>
  isLoggedIn() ? component : () => <Redirect to={redirectTo} />;
