import PropTypes from 'prop-types'
import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';

import I18n, { isConstant }  from 'core-ui__i18n';
import Done from 'lib-ui__icons/icons/done';
import DangerWarning from 'lib-ui__icons/icons/danger-warning';
import WarningIcon from 'lib-ui__icons/icons/warning';
import CircleInfo from 'lib-ui__icons/icons/circle-info';

import style from './style'

const cx = classNames.bind(style);

class Warning extends PureComponent {

    static displayName = '[component] warning';

    static defaultProps = {
        iconType     : 'warning',
        nested       : true,
        i18attributes: {}
    };

    static propTypes = {
        className           : PropTypes.string,
        classNameTextWrapper: PropTypes.string,
        classNameIcon       : PropTypes.string,
        children            : PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.node
        ]),
        iconType     : PropTypes.string,
        nested       : PropTypes.bool,
        i18attributes: PropTypes.object,
        title        : PropTypes.string
    };

    get content() {
        if(isConstant(this.props.children)) {
            return <I18n {...this.props.i18attributes} children={this.props.children} />
        } else {
            return this.props.children
        }
    }

    render() {
        const { iconType: type } = this.props;
        const iconProps = {
            className: cx('warning__icon', `warning__icon_${type}`, this.props.classNameIcon)
        };
        let icon = <WarningIcon {...iconProps} />;

        switch(this.props.iconType) {
            case 'info':
                icon = <CircleInfo {...iconProps} />;
                break;
            case 'error':
                icon = <DangerWarning {...iconProps} />;
                break;
            case 'success':
                icon = <Done {...iconProps} />;
                break;
        }

        return (
            <div title={this.props.title} className={cx('warning', `warning_${type}`, this.props.className)} data-nested={this.props.nested}>
                {icon}
                <div className={cx('warning__wrapper', this.props.classNameTextWrapper)}>
                    {this.content}
                </div>
            </div>
        )
    }

}

export { Warning as default };
