import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './heading';

storiesOf('Heading', module)
  .add('default', () => <Heading>Heading</Heading>)
  .add('h2', () => <Heading tagName="h2">Heading</Heading>)
  .add('h3', () => <Heading tagName="h3">Heading</Heading>)
  .add('h4', () => <Heading tagName="h4">Heading</Heading>)
  .add('h5', () => <Heading tagName="h5">Heading</Heading>)
  .add('h6', () => <Heading tagName="h6">Heading</Heading>);
