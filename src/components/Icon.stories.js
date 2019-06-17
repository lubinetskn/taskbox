import React from 'react';
import { storiesOf } from '@storybook/react';

import IconList from './icon/index';

storiesOf('Icons', module)
  .add('SVG Icons ', () => {
    let arr =  Object.entries(IconList);
    return <div style ={{ display:'flex', alignItems: 'middle', justifyContent: 'space-around'}} >
      { arr.map((elem) => {
        return ( <img src={elem[1]} alt={elem[0]} />);
      }) }
    </div>
  })
  .add('Icons with label', () => {
    let arr =  Object.entries(IconList);
    return <div style ={{ display:'flex', alignItems: 'middle', justifyContent: 'space-around', flexFlow: 'wrap'}} >
      { arr.map((elem) => {
        return ( <div style={{padding: '0 20px', flex: '0 1 20%', alignItems: 'center', display: 'flex', marginBottom: '20px'}} key={elem[0]}><span style={{marginRight: '10px'}}>{elem[0]}</span><img src={elem[1]} alt={elem[0]} /></div>);
      }) }
  </div>
  });