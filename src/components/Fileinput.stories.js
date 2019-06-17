import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import FileInput from './file-input';

storiesOf('File Input', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return <FileInput title={'Заголовок'} info={'Подпись'} name={'Name'}/>;
  });
