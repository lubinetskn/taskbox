import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import NotFound from './not-found';

storiesOf('Not Found', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return (
      <NotFound />
    );
  });
