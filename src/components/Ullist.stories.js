import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import UList from './ul-list';

const props = {
  children: [
      { value: 'Гарантия выплаты выигрышей' },
      { value: 'Безопасность при совершении интерактивных сделок	' },
      { value: 'Требование законодательства РФ	' }
  ]
};

storiesOf('UList', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return (
      <UList {...props}/>
    );
  });
