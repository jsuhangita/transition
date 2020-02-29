import React from 'react';
import PropTypes from 'prop-types';
import { Text, ViewPropTypes } from 'react-native';
import styles from './Title.styles';

export default function Title(props) {
  const {
    title,
    small,
    medium,
    large,
    style: styleOverride,
  } = props;
  const stylesProps = [
    styles.title__default,
    small && styles.title__small,
    medium && styles.title__medium,
    large && styles.title__large,
    styleOverride,
  ];
  return (
    <Text style={stylesProps}>{title}</Text>
  );
}
Title.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  title: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};
Title.defaultProps = {
  small: false,
  medium: false,
  large: false,
  style: {},
};
