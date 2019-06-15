import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import FileInput from './file-input';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('file input', () => {
    return <FileInput />;
  });
