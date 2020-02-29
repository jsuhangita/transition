import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './ErrorTextIndicator.styles';

function ErrorTextIndicator(props) {
  const { text, ...extraProps } = props;
  return (
    <View style={styles.errorContainer}>
      <Text {...extraProps} style={styles.errorText}>{text}</Text>
    </View>
  );
}

ErrorTextIndicator.propTypes = {
  text: PropTypes.string,
};

ErrorTextIndicator.defaultProps = {
  text: '',
};

export default ErrorTextIndicator;
