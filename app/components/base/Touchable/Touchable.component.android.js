import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { noop } from 'lodash';

export default function Touchable(props) {
  const {
    disabled,
    onPress,
    children,
    style: overrideStyle,
    ...others
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      useForeground
      style={overrideStyle}
      {...others}
    >
      {children}
    </TouchableOpacity>
  );
}

Touchable.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
};

Touchable.defaultProps = {
  disabled: false,
  onPress: noop,
  style: {},
};
