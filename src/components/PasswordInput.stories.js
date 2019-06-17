import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import PasswordInput from './password-input';

const props = {
  newPassName    : 'password',
  confirmPassName: 'passwordConfirmation'
};

storiesOf('Password Input', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return (<div style={{display: 'flex', justifyContent: 'center'}}>
        <PasswordInput {...props}/>
      </div>
    );
  });
