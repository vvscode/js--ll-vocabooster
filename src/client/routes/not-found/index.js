import React from 'react';
import NotFound from './NotFound.component';

import './NotFound.css';

const title = 'Error - 404';

export default () => ({
  title,
  component: props => <NotFound title={title} {...props} />,
});
