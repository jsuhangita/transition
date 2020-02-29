import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import { theme } from '../../../styles/core.style';
import styles from './Loading.styles';

export default function Loading(props) {
  const { center, color, size } = props;
  const containerStyles = [
    styles.container,
    center && styles.center,
  ];
  return (
    <View style={containerStyles}>
      <ActivityIndicator
        color={color}
        size={size}
      />
    </View>
  );
}
Loading.propTypes = {
  center: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Loading.defaultProps = {
  center: false,
  color: theme.primary,
  size: theme.spinnerSizeLarge,
};
