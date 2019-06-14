import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import I18n from 'core-ui__i18n';

import Circle from 'lib-ui__icons/icons/circle';

import style from './style';

import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class UList extends PureComponent {

    static displayName = '[component] ul-list';

    static defaultProps = {
        classNames: {
            wrapper: '',
            item   : '',
            icon   : '',
            nodes  : ''
        }
    };

    static propTypes = {
        classNames: PropTypes.object,
        children  : PropTypes.array.isRequired
    };

    render() {
        return (
            <ul className={cx('ul-list', this.props.classNames.wrapper)}>
                {this.props.children.map((item, i) => {
                    const iconClass = cx(this.props.classNames.icon, { 'ul-list__icon': !this.props.classNames.icon });

                    return (
                        <li key={i} className={cx('ul-list__item', this.props.classNames.item)}>
                            {item.icon ? <item.icon className={iconClass} /> : <Circle className={iconClass} />}
                            <I18n className={cx('ul-list__inner-item')}>{item.value}</I18n>
                            {item.nodes && <div className={cx('ul-list__nodes', this.props.classNames.nodes)}>{item.nodes}</div> }
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default UList;
