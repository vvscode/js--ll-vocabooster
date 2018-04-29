import React from 'react';
import Home from './Home.container';

import './Home.css';

const title = 'Home';

export default () => ({
  title,
  component: props => <Home title={title} {...props} />,
});
