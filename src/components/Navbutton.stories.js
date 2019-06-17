import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import NavButton from './nav-button';

const props = {
  path:'/',
  topNavigation:[
    {name:"Видеотрансляции", primary: true, priority: 110, submenu:null, url: "/livevideo#tv/true/track/false"},
    {name:"Прогнозы", primary: true, priority:109, submenu:null, url: "/forecast"}
  ]
}
storiesOf('Nav Button', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return (
      <NavButton {...props}/>
    );
  });
