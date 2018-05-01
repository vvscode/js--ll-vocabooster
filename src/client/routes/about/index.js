import React from 'react';
import About from './About.component';
import './About.css';

const title = 'About';

export default () => ({
  title,
  component: props => <About title={title} {...props} />,
});
