import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import NewsList from './news-list';

const props = {
  news: {
    newsList:[{
      description: "<p>Киберпонедельник</p>\r\n",
      id: 8964,
      isReview: false,
      isVideoBroadcast: false,
      pictureAlt: "kiberponedelnik",
      pictureBig: "/files/news/pictureFull/8964/kiberponedelnik.jpg",
      pictureList: "/files/news/pictureList/8964/kiberponedelnik.jpg",
      publishedAt: 1549615680000,
      shortDescription: "Киберпонедельник",
      tags: Array[0],
      title: "Киберпонедельник",
      url: "poluchite-fribet-3-000-r-v-kiberponedelnik",
      video1: "",
      video2: "",
      video3: ""
    }],
    paging:{
      rowsPerPageCount: 1,
      totalPageCount: 0,
      totalRowCount:1
    }
  },

  path: `/news/tags`,
  step: 10
};

storiesOf('News List', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return (
      <NewsList {...props}/>
    );
  });
