import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import I18n, { isConstant } from 'core-ui__i18n';

import style from './style';

const cx = classNames.bind(style);

class Heading extends PureComponent {

    static displayName = '[component] heading';

    static propTypes = {
        tagName: PropTypes.oneOf([
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
        ]),
        className: PropTypes.string,
        children : PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.array.isRequired
        ])
    };

    static defaultProps = {
        tagName: 'h1'
    };

    get className() {
        return cx('heading', `heading_${this.props.tagName}`, this.props.className)
    }

    render() {
        const { tagName, className, ...props } = this.props; // eslint-disable-line no-unused-vars

        props.className = this.className;

        if(isConstant(this.props.children)) {
            return <I18n {...props} tagName={tagName} />
        }

        if(Array.isArray(this.props.children)) {
            return (
                <this.props.tagName {...props}>
                    {this.props.children.map((item, i) => isConstant(item) ? <I18n key={i}>{item}</I18n> : item)}
                </this.props.tagName>
            )
        }

        return <this.props.tagName {...props} />
    }

}

export default Heading;
