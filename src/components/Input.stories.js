import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Input from './input';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return <Input />;
  });
