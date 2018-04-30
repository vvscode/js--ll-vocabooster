import React from 'react';
import About from './About.component';
import './About.css';

const title = 'About';

export default () => ({
  title,
  component: props => <About title={title} {...props} />,
});
/*
File was generated with tamm-cli from next settings:
{
  "path": "about",
  "addStyles": true,
  "connectedToRedux": "No",
  "componentName": "about",
  "camelizedComponentName": "About",
  "withRedux": false
}
*/
