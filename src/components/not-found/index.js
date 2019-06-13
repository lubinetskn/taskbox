import React from 'react';
import classnames from 'classnames/bind';
import I18n from 'core-ui__i18n';

import Heading from '../component/heading';

import notFoundImage from './img/not-found.svg';

import style from './style';

const cx = classnames.bind(style);

const NotFound = () => (
  <div className={cx('not-found')}>
    <div className={cx('not-found__content')}>
      <img
        width="175"
        height="242"
        src={notFoundImage}
        className={cx('not-found__image')}
      />
      <div className={cx('not-found__text-block')}>
        <Heading className={cx('not-found__heading')}>
          TK_NOT-FOUND__HEADING
        </Heading>
        <Heading className={cx('not-found__header-text')} tagName="h2">
          TK_NOT-FOUND__TEXT-HEADER
          <I18n className={cx('not-found__header-span')}>
            TK_NOT-FOUND__TEXT-HEADER_PART-2
          </I18n>
        </Heading>
        <div className={cx('not-found__text-block')}>
          <Heading tagName="h4" className={cx('not-found__error-header')}>
            TK_NOT-FOUND__ERROR-TEXT
          </Heading>
          <I18n tagName="p" className={cx('not-found__text')}>
            TK_NOT-FOUND__TEXT-BLOCK-1
          </I18n>
          <I18n tagName="p" className={cx('not-found__text')}>
            TK_NOT-FOUND__TEXT-BLOCK-2
          </I18n>
        </div>
      </div>
    </div>
    <I18n tagName="p" className={cx('not-found__bottom-text')}>
      TK_NOT-FOUND__BOTTOM-TEXT
    </I18n>
  </div>
);

export default NotFound;
