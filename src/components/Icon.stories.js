import React from 'react';

import { TooltipLinkList } from '@storybook/components';
import { Icons } from '@storybook/components';

export default {
  component: Icons,
  title: 'UI|Sidebar/ListItemIcon',
};

export const all = () => (
  <TooltipLinkList
    links={[
      { title: 'has icon', left: <Icons icon="check" /> }
    ]}
  />
);
