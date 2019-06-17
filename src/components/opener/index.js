import PropTypes from 'prop-types';
import React from 'react';
import I18n, { isConstant } from 'core-ui__i18n';
import classNames from 'classnames/bind';
import uniqueId from 'lodash.uniqueid';

import { ArrowDown } from 'lib-ui__icons';
import CUIPureComponent from 'core-ui__pure-component';

import style from './style';

const cx = classNames.bind(style);

class Opener extends CUIPureComponent {

    static displayName = '[component] opener';

    static propTypes = {
        label       : PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        labelTitle  : PropTypes.string,
        onClick     : PropTypes.func,
        checkbox    : PropTypes.element,
        classNames  : PropTypes.object,
        tagName     : PropTypes.string,
        arrowLeftPos: PropTypes.bool,
        open        : PropTypes.bool,
        inHeader    : PropTypes.bool,
        inDotsMenu  : PropTypes.bool,
        iconType    : PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func
        ]),
        uid     : PropTypes.string,
        relation: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.element
        ]),
        closeOnClick: PropTypes.bool,
        forceClose  : PropTypes.bool
    };

    static defaultProps = {
        arrowLeftPos: false,
        tagName     : 'span',
        relation    : true,
        checkbox    : null,
        classNames  : {
            header    : '',
            button    : '',
            icon      : '',
            iconActive: '',
            main      : '',
            transition: ''
        },
        closeOnClick: false,
        forceClose  : false
    };

    constructor(props) {
        super(props);

        this.$childrenWrapper = React.createRef();
    }

    state = {
        open          : !!this.props.open,
        height        : 0,
        minHeight     : 0,
        renderChildren: !!this.props.open,
        transitionTime: 0, // eslint-disable-line react/no-unused-state
        uid           : this.props.uid
    };

    _triggerTimeout = null;

    componentDidMount() {
        this.postMountUpdate(this.state.open);
        if(this.props.relation) {
            document.addEventListener('click', this.onClickDocument)
        }
    }

    postMountUpdate = (open) => {
        this.setState({
            uid      : uniqueId('opener-'),
            height   : open ? 'auto' : this.state.height,
            minHeight: open ? this.$childrenWrapper.current.clientHeight : this.state.minHeight
        })
    };

    componentWillUnmount() {
        if(this.props.relation) {
            document.removeEventListener('click', this.onClickDocument)
        }

        clearTimeout(this._triggerTimeout);
    }

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillReceiveProps(props) {
        const forceClose = props.forceClose && !this.props.forceClose && this.state.open;
        const forceOpen = props.open && !this.props.open && !this.state.open;

        if(forceClose || forceOpen) {
            this.onClickOpenDir();
        }
    }

    componentDidUpdate(props) {
        if(this.state.open && props.children.length !== this.props.children.length) {
            this.postMountUpdate(this.state.open)
        }
    }

    onClickDocument = (e) => {
        if(this.state.open) {
            if(!this.$wrapper.contains(e.target)) {
                this.onClickOpenDir();
            }
        }
    };

    onClickOpenDir = (e) => {
        e && e.stopPropagation();

        this.setState({
            open          : !this.state.open,
            renderChildren: true
        }, this.checkOpen);

        if(this.props.onClick) {
            this.props.onClick(e)
        }
    };

    // сначала надо вернуть оригинальную высоту контейнера
    checkOpen = () => {
        if(this.state.open) {
            this.setState({ height: this.$childrenWrapper.current.clientHeight });
        } else {
            this.setState({
                height   : this.$node.clientHeight,
                minHeight: 0
            }, this.animationTrigger);
        }
    };

    // потом триггернуть анимацию
    animationTrigger = () => {
        this._triggerTimeout = setTimeout(() => {
            this.setState({
                height   : 0,
                minHeight: 0
            });
        });
    };

    endTransitionHandler = (event) => {
        if(event.propertyName === 'height') {
            if(this.state.open) {
                this.setState({
                    height   : 'auto',
                    minHeight: this.state.height
                });
            } else {
                this.setState({ renderChildren: false });
            }
        }
    };

    get elIcon() {
        if(this.props.iconType instanceof Function) {
            return <this.props.iconType className={cx(this.props.classNames.icon, { [this.props.classNames.iconActive]: this.state.open })} />
        } else if(this.props.iconType) {
            return this.props.iconType
        }

        return <ArrowDown className={cx('icon', 'opener__icon', this.props.classNames.icon)} />
    }

    get label() {
        if(this.props.label) {
            const isCheckbox = this.props.checkbox && this.state.open;

            return (
                <span title={this.props.labelTitle} className={cx('opener__header', this.props.classNames.header)} data-open={isCheckbox}>
                    {isConstant(this.props.label) ? <I18n children={this.props.label} /> : this.props.label}
                </span>
            )
        }
    }

    get elHeader() {
        const props = {
            className        : cx('opener__button', this.props.classNames.button),
            'data-open'      : this.state.open,
            'data-left-arrow': this.props.arrowLeftPos || !!this.props.checkbox,
            onClick          : this.onClickOpenDir
        };

        return (
            <this.props.tagName {...props}>
                {this.elIcon}
                {this.label}
                {this.props.checkbox}
            </this.props.tagName>
        );
    }

    get elChildren() {
        const props = {
            onTransitionEnd : this.endTransitionHandler,
            ref             : (node) => { this.$node = node },
            'data-in-header': this.props.inHeader,
            'data-open'     : this.state.open,
            className       : cx('opener__transition', this.props.classNames.transition),
            style           : {
                height   : this.state.height === 'auto' ? 'auto' : `${this.state.height}px`,
                minHeight: `${this.state.minHeight}px`
            },
            onClick: this.props.closeOnClick ? this.onClickOpenDir : null
        };

        return (
            <div {...props}>
                <div ref={this.$childrenWrapper} className={cx('opener__items-wrapper')}>
                    {this.state.renderChildren && this.props.children}
                </div>
            </div>
        )
    }

    render() {
        return (
            <section ref={(node) => { this.$wrapper = node }} id={this.state.uid} className={cx('opener', this.props.classNames.main)} data-open={this.state.open} data-in-dots={this.props.inDotsMenu}>
                {this.elHeader}
                {this.elChildren}
            </section>
        )
    }

}

export default Opener;
