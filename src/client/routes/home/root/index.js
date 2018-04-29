import React from 'react';
import Root from './Root.component';

const title = 'Root';

export default () => ({
  title,
  component: props => <Root title={title} {...props} />,
});
