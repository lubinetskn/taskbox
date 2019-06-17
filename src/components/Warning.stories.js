import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Warning from './warning';

storiesOf('Warning', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return (
      <Warning children = 'Внимание'/>
    );
  })
  .add('Error', () => {
    return (
      <Warning iconType ='error' children = 'Ошибочка' />
    );
  });
