import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Notification from './notification';

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .add('Notification Error', () => {
    return (
      <Notification
        show={true}
        message={'Notification'}
        children="ERROR MESSAGE"
      />
    );
  });
