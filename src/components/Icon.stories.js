import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon/index';
console.log(Icon);

storiesOf('Icon', module).add('default', () => {
  console.log(Icon);
  Icon.map(elem => {
    console.log(elem);

    //return <img src={Object.keys(elem)} />;
  });
});
