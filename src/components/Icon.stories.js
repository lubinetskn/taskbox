import React from 'react';
import { storiesOf } from '@storybook/react';

import IconList from './icon/index'
import { Logo, Android, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ArrowFull, ArrowMenu, Card, ChangeBase, ChangeOdds, Circle, Close, Coupon, DangerWarning, DefSumm, Delay, Delete, Deposit, Desktop, Done, Face, Gift, Heart, Home, Info, Ios, Lock, Menu, Mobile, MyAccount, MyStakes, Ok, Pin, Quick, Reload, Search, Settings, StarFilled, StarOutline, Text, Video, Statement, VisibleOff, VisibleOn, Warning, Widget, Withdraw, Chat, Email,Telegram ,Viber , Return} from 'lib-ui__icons';

console.log(IconList);

storiesOf('Icons', module)
  .add('Icons List SVG', () => {
    let arr =  Object.entries(IconList);
    return arr.map((elem) => {
      return <img src={elem[1]} alt={elem[0]} />
    })
  })
  .add('Icons List LibUi', () => {
    let arr =  [Logo, Android, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ArrowFull, ArrowMenu, Card, ChangeBase, ChangeOdds, Circle, Close, Coupon, DangerWarning, DefSumm, Delay, Delete, Deposit, Desktop, Done, Face, Gift, Heart, Home, Info, Ios, Lock, Menu, Mobile, MyAccount, MyStakes, Ok, Pin, Quick, Reload, Search, Settings, StarFilled, StarOutline, Text, Video, Statement, VisibleOff, VisibleOn, Warning, Widget, Withdraw, Chat, Email,Telegram ,Viber , Return];
    return arr.map((elem) => {
      return elem
    })
  });