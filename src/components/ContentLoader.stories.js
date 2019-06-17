import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import ContentLoader from './content-loader';

storiesOf('Content Loader', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return <ContentLoader visible={true} />;
  });
