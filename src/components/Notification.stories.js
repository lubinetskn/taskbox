import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Notification from './Notification';

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .add('Notification', () => {
    return <Notification />;
  })
  .add('Notification', () => {
    return (
      <Notification
        show={!!this.props.error}
        message={message}
        children="ERROR MESSAGE"
      />
    );
  });
