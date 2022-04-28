import * as React from 'react';
import { storiesOf } from '@storybook/react';

import SomeComponent from './SomeComponent';

const stories = storiesOf('SomeComponent', module);

stories.add('SomeComponent', () => <SomeComponent />, {
info: { inline: true },
text: `

  ### Notes

  Some component

  ### Usage
  ~~~js
  <Some />
  ~~~

`
});