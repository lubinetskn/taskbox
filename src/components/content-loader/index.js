import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import LUILoaderCircle from 'lib-ui__loader/circle';

import style from './style';

const cx = classNames.bind(style);

const ContentLoader = (props) => {
    if(props.visible) {
        return (
            <div className={cx('content-loader')}>
                <LUILoaderCircle className={cx('content-loader__circle')} />
            </div>
        )
    } else {
        return null;
    }
};

ContentLoader.displayName = '[route] component/content-loader';

ContentLoader.propTypes = { visible: PropTypes.bool };

export default ContentLoader;
