import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import I18n from 'core-ui__i18n';

import Warning from '../warning';

import clipIcon from './img/clip.svg';
import style from './style';

const cx = classNames.bind(style);
const MAX_SIZE_LIMIT = 5242880;

class FileInput extends Component {
  static displayName = '[component] file-input';

  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    buttonTitle: PropTypes.string,
    getValidityFunc: PropTypes.func,
    onChange: PropTypes.func,
    maxSize: PropTypes.number,
    disabled: PropTypes.bool,
    fileTypes: PropTypes.array,
  };

  static defaultProps = {
    name: '',
    className: '',
    title: '',
    info: '',
    buttonTitle: 'Выбрать файл',
    maxSize: MAX_SIZE_LIMIT,
    fileTypes: [],
    disabled: false,
  };

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  state = {
    fileChosen: false,
    error: false,
    fileName: '',
  };

  onChangeCheckFileSize = e => {
    if (e && e.target) {
      const {
        files: [file],
      } = e.target;

      if (file) {
        let isInvalidType = false;

        if (this.props.fileTypes.length) {
          isInvalidType = this.props.fileTypes.indexOf(file.type) === -1;
        }

        this.setState(
          {
            fileChosen: true,
            fileName: file.name,
            error:
              file.size > this.props.maxSize ||
              file.type.length === 0 ||
              isInvalidType,
          },
          () => {
            return (
              this.props.getValidityFunc &&
              this.props.getValidityFunc(
                this.state.fileChosen && !this.state.error,
                file,
              )
            );
          },
        );
      }
    }
  };

  get elInput() {
    const { fileTypes } = this.props;
    let accept;

    if (fileTypes.length) {
      accept =
        fileTypes.length > 1
          ? fileTypes.reduce(
              (accumulatedTypes, nextType) =>
                `${accumulatedTypes}, ${nextType}`,
            )
          : fileTypes[0];
    }

    const props = {
      name: this.props.name,
      type: 'file',
      className: cx('file-input__input'),
      ref: this.inputRef,
      onChange: this.props.onChange || this.onChangeCheckFileSize,
      accept,
    };

    return <input {...props} />;
  }

  get elFile() {
    if (this.state.fileChosen) {
      const props = {
        className: cx('file-input__filename-wrapper'),
        classNameIcon: cx('file-input__file-icon'),
        classNameTextWrapper: cx('file-input__filename'),
        iconType: this.state.error ? 'error' : 'success',
        children: this.state.error
          ? 'Файл не загружен'
          : this.state.fileName,
        title: this.state.error ? undefined : this.state.fileName,
      };

      return <Warning {...props} />;
    } else {
      return (
        <I18n
          className={cx('file-input__file-not-chosen')}
          children="Файл не выбран"
        />
      );
    }
  }

  onClickOpenFileDialog = e => {
    e && e.preventDefault();

    this.inputRef.current.click();
  };

  get elButton() {
    const { disabled, buttonTitle } = this.props;

    return (
      <div
        className={cx('file-input__button', {
          'file-input__button_disabled': disabled,
        })}
        onClick={this.onClickOpenFileDialog}
      >
        <span className={cx('file-input__clip-icon')}>
          <img src={clipIcon} />
        </span>
        <I18n
          className={cx('file-input__button-text')}
          children={buttonTitle}
        />
      </div>
    );
  }

  get elFakeInput() {
    return (
      <div className={cx('file-input__fake-input')}>
        {this.elButton}
        {this.elFile}
      </div>
    );
  }

  render() {
    return (
      <div className={cx('file-input__file-input-group', this.props.className)}>
        <I18n
          className={cx('file-input__file-input-title')}
          children={this.props.title}
        />
        {this.elFakeInput}
        {this.elInput}
        <I18n
          className={cx('file-input__file-input-info', {
            'file-input__file-input-info_error': this.state.error,
          })}
          children={this.props.info}
        />
      </div>
    );
  }
}

export default FileInput;
