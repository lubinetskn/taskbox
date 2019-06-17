import React from 'react';
import classnames from 'classnames/bind';
import I18n from 'core-ui__i18n';

import Heading from '../heading';

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
          Страница не найдена	
        </Heading>
        <Heading className={cx('not-found__header-text')} tagName="h2">
          Этой странице	
          <I18n className={cx('not-found__header-span')}>
            «требуется замена»	
          </I18n>
        </Heading>
        <div className={cx('not-found__text-block')}>
          <Heading tagName="h4" className={cx('not-found__error-header')}>
            Ошибка 404	
          </Heading>
          <I18n tagName="p" className={cx('not-found__text')}>
          К сожалению, запрашиваемая Вами страница не найдена на сайте нашей компании.
          </I18n>
          <I18n tagName="p" className={cx('not-found__text')}>
            К счастью, все остальные страницы сайта более чем доступны.
          </I18n>
        </div>
      </div>
    </div>
    <I18n tagName="p" className={cx('not-found__bottom-text')}>
    Если ассистент судьи двумя руками держит флаг над головой, то он сообщает о происходящей замене и о том, что игру следует возобновлять только после выполнения замены.
    </I18n>
  </div>
);

export default NotFound;
