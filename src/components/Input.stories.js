import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Input from './Input';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      return <Input />;
    },
    {
      notes: 'Simple Input',
    },
  )
  .add(
    'input password',
    () => {
      return <Input type="password" />;
    },
    {
      notes: 'Input password',
    },
  )
  .add('file input', () => {
    return <Input type="file" />;
  });
