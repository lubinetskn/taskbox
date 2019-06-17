import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import Link from 'lib-ui__link';
import I18n from 'core-ui__i18n';
import { ArrowLeft, ArrowEnd, ArrowStart, ArrowRight } from 'lib-ui__icons';

import Heading from '../heading';
import { formatDate } from '../helpers/formatDate';

import style from './style';

const cx = classnames.bind(style);

class NewsList extends Component { //eslint-disable-line

    static propTypes = {
        path        : PropTypes.string,
        news        : PropTypes.object,
        step        : PropTypes.number,
        isHashType  : PropTypes.bool,
        name        : PropTypes.string,
        newsItemPath: PropTypes.string
    };

    static contextTypes = {
        router: PropTypes.object
    };

    get urlPaginationSeparator() {
        if(this.props.isHashType) {
            return '#';
        }

        return '/';
    }

    onClickForward = () => {
        const page = this.props.news.page + 10;
        const total = this.props.news.paging.totalPageCount;

        if(page > total) {
            this.context.router.push(`${this.props.path}${this.urlPaginationSeparator}${total}`);
        } else {
            this.context.router.push(`${this.props.path}${this.urlPaginationSeparator}${page}`);
        }
    };

    onClickBackward = () => {
        const page = this.props.news.page - 10;

        if(page < 1) {
            this.context.router.push(`${this.props.path}${this.urlPaginationSeparator}1`)
        } else {
            this.context.router.push(`${this.props.path}${this.urlPaginationSeparator}${page}`)
        }
    };

    elNewsItem = (item, index) => {
        const published = formatDate(item.publishedAt);
        let url = `/News/${item.newsId || item.id}/${item.url}`;

        if(this.props.newsItemPath) {
            url = `${this.props.newsItemPath}/${item.url}`;
        }

        if((this.props.name === 'forecast') && !this.props.newsItemPath) {
            url = `${this.props.path}/${item.url}`;
        }

        return (
            <Link className={cx('news-list__item')} key={`news-list-item_${index}`} to={url}>
                <div className={cx('news-list__item-img')} style={{ backgroundImage: `url(${item.pictureBig})` }}>
                    {this.getBroadcastBanner(item.isVideoBroadcast)}
                    <img className={cx('news-list__item-img_hidden')} src={item.pictureBig} alt={item.pictureAlt} />
                </div>
                <div className={cx('news-list__item-text')}>
                    <Heading tagName="h2" className={cx('news-list__item-heading', 'news-list__hide')} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div className={cx('news-list__item-short-desc', 'news-list__hide', 'news-list__hide_desc')} dangerouslySetInnerHTML={{ __html: item.shortDescription }} />
                    <span className={cx('news-list__item-published')}>
                        {published}
                    </span>
                </div>
            </Link>
        )
    };

    get elNews() {
        const news = this.props.news.newsList;

        if(news.length) {
            return this.elNewsList(news)
        } else {
            return <I18n children="TK_DESKTOP__NO-NEWS" />
        }
    }

    getBroadcastBanner = (isVideoBroadcast) => {
        if(isVideoBroadcast) {
            return (
                <div className={cx('news-list__broadcast')} />
            )
        }
    };

    get elNewsList() {
        const news = this.props.news.newsList;

        return (
            <div className={cx('news-list')}>
                {news.map(this.elNewsItem)}
            </div>
        )
    }

    get elPagination() {
        if(this.props.news.paging.totalPageCount <= 1) {
            return;
        }

        const news = this.props.news;
        const total = news.paging.totalPageCount;
        const step = this.props.step > total ? total : this.props.step;
        const isFirstPage = news.page === 1;
        const isLastPage = news.page === total;
        const pages = [];
        let deltaLeft;
        let deltaRight;

        if(total - news.page <= step / 2) {
            deltaRight = total - news.page;
            deltaLeft = (step - 1) - deltaRight;
        } else {
            deltaLeft = 4;
            deltaRight = news.page <= 4 ? (step - news.page) : step / 2;
        }

        const left = news.page - deltaLeft;
        const right = news.page + deltaRight + 1;

        for(let i = 1; i < news.page + step; i++) {
            const props = {
                key                : i,
                to                 : `${this.props.path}${this.urlPaginationSeparator}${i}`,
                activeOnlyWhenExact: true,
                activeClassName    : cx('news-list__page-button_active'),
                className          : cx('news-list__pagination-button', 'news-list__page-button', { 'news-list__page-button_active': i === 1 && news.page === 1 }),
                children           : i
            };

            if(i >= left && i < right) {
                pages.push(<Link {...props} />);
            }
        }

        return (
            <div className={cx('news-list__pagination')}>
                <div className={cx('news-list__backward-buttons')}>
                    <Link to={`${this.props.path}${this.urlPaginationSeparator}1`} className={cx('news-list__pagination-button', 'news-list__backward-button', { 'news-list__backward-button_disabled': isFirstPage })}>
                        <ArrowStart className={cx('news-list__pagination-icon', 'news-list__pagination-icon_begin')} />
                    </Link>
                    <span onClick={this.onClickBackward} className={cx('news-list__pagination-button', 'news-list__backward-button', { 'news-list__backward-button_disabled': isFirstPage })}>
                        <ArrowLeft className={cx('news-list__pagination-icon')} />
                    </span>
                </div>
                {pages}
                <div className={cx('news-list__forward-buttons')}>
                    <span onClick={this.onClickForward} className={cx('news-list__pagination-button', 'news-list__forward-button', { 'news-list__forward-button_disabled': isLastPage })}>
                        <ArrowRight className={cx('news-list__pagination-icon')} />
                    </span>
                    <Link to={`${this.props.path}${this.urlPaginationSeparator}${this.props.news.paging.totalPageCount}`} className={cx('news-list__pagination-button', 'news-list__forward-button', { 'news-list__forward-button_disabled': isLastPage })}>
                        <ArrowEnd className={cx('news-list__pagination-icon', 'news-list__pagination-icon_end')} />
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                {this.elNewsList}
                {this.elPagination}
            </Fragment>
        )
    }

}

export default NewsList;
