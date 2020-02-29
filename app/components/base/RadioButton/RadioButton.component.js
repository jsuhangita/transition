import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, map } from 'lodash';
import { View, ViewPropTypes } from 'react-native';
import Radio from './Radio.component';
import styles from './RadioButton.styles';
import Label from '../Label/Label.component';

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress(item) {
    const { onChange, name } = this.props;
    onChange({
      value: item.id, name, type: 'radioButton',
    });
  }

  render() {
    const {
      options,
      value,
      label,
      wrapperStyle: wrapperStyleOverride,
      containerStyle: containerStyleOverride,
      disabled,
      noMargin,
      error,
      transparent,
      multiline,
      round,
      outline,
      white,
    } = this.props;
    const wrapperStyleProps = [
      styles.wrapper,
      (noMargin || error) && styles.no_margin,
      wrapperStyleOverride,
    ];
    const containerStyleProps = [
      styles.container,
      round && styles.round,
      outline && styles.outline,
      white && styles.border_white,
      multiline && styles.multiline,
      transparent && styles.transparent,
      disabled && styles.disabledInput,
      containerStyleOverride,
    ];
    return (
      <View style={wrapperStyleProps}>
        <View style={containerStyleProps}>
          {label ? <Label text={label} /> : null}
          <View style={styles.content}>
            <View style={styles.radioContainer}>
              {
                map(options, (item) => (
                  <Radio
                    key={`radio_${item.id}`}
                    item={item}
                    onPress={this._onPress}
                    value={value}
                  />
                ))
              }
            </View>
          </View>
        </View>
      </View>
    );
  }
}

RadioButton.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  noMargin: PropTypes.bool,
  transparent: PropTypes.bool,
  multiline: PropTypes.bool,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  white: PropTypes.bool,
  error: PropTypes.string,
  wrapperStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  label: PropTypes.string,
};

RadioButton.defaultProps = {
  name: '',
  onChange: noop,
  value: '',
  disabled: false,
  noMargin: false,
  transparent: false,
  multiline: false,
  outline: false,
  round: false,
  white: false,
  error: '',
  wrapperStyle: {},
  containerStyle: {},
  label: null,
};
