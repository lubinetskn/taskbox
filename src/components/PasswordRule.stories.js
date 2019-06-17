import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import PasswordRules from './password-rule';

storiesOf('Password Rule', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return (
      <PasswordRules name="simple"/>
    );
  });
