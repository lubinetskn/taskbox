import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import Link from 'lib-ui__link';

import Opener from 'component/opener';

import style from './style.pcss';

const classnames = classNames.bind(style);

class NavButton extends PureComponent {

    static displayName = '[component] nav-button';

    static defaultProps = {
        inHeader  : true,
        inDotsMenu: false
    };

    static propTypes = {
        link: PropTypes.shape({
            name    : PropTypes.string,
            url     : PropTypes.string,
            primary : PropTypes.bool,
            priority: PropTypes.number,
            submenu : PropTypes.arrayOf(PropTypes.shape({
                text: PropTypes.string,
                url : PropTypes.string
            })),
            id    : PropTypes.number,
            inMenu: PropTypes.bool
        }),
        path      : PropTypes.string,
        inDropdown: PropTypes.bool,
        inMenu    : PropTypes.bool,
        dispatch  : PropTypes.func,
        inHeader  : PropTypes.bool,
        inDotsMenu: PropTypes.bool,
        onClick   : PropTypes.func
    };

    onClick = (e) => {
        this.props.onClick && this.props.onClick(e);
    };

    get elButton() {
        const link = this.props.link;
        const path = this.props.path;
        // временный костыль
        const activeOnlyWhenExact = path.indexOf('today') === -1 && path.indexOf('News') === -1 && path.indexOf('live') === -1;
        const isHttp = /^http/;
        const props = {
            'data-in-menu'     : this.props.inMenu || this.props.link.inMenu,
            'data-in-dots'     : this.props.inDotsMenu,
            className          : classnames('nav-button', { 'nav-button__primary': link.primary }),
            activeClassName    : classnames('nav-button__active'),
            activeOnlyWhenExact: activeOnlyWhenExact,
            to                 : link.url
        };

        if(link.url && isHttp.test(link.url)) {
            props.target = '_blank';
        }

        if(link.submenu) {
            let isActive = link.submenu.some((item) => item.url === path);

            const openerProps = {
                label       : link.name,
                arrowLeftPos: true,
                inHeader    : this.props.inHeader,
                inDotsMenu  : this.props.inDotsMenu,
                classNames  : {
                    button: classnames('nav-button__opener', { 'nav-button__primary': link.primary }),
                    main  : classnames('nav-button__dropdown', { 'nav-button__active': isActive })
                },
                closeOnClick: true,
                onClick     : this.onClick
            };

            return (
                <Opener {...openerProps}>
                    <div className={classnames('nav-button__submenu')}>
                        {this.props.link.submenu.map((item, i) => {
                            const props = {
                                'data-in-list'     : true,
                                'data-in-dots'     : this.props.inDotsMenu,
                                to                 : item.url,
                                activeClassName    : classnames('nav-button__active'),
                                activeOnlyWhenExact: true,
                                className          : classnames('nav-button__item')
                            };

                            if(item.url && isHttp.test(item.url)) {
                                props.target = '_blank';
                            }

                            return (
                                <Link key={i} {...props}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </Opener>
            )
        }

        return (
            <Link {...props}>
                {link.name}
            </Link>
        )
    }

    render() {
        return this.elButton
    }

}

export default NavButton;
