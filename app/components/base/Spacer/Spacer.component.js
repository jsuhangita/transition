import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Spacer = ({ small, large }) => {
  const containerStyleProps = {
    height: 16,
    ...(small ? { height: 8 } : {}),
    ...(large ? { height: 32 } : {}),
  };
  return <View style={containerStyleProps} />;
};
Spacer.propTypes = {
  large: PropTypes.bool,
  small: PropTypes.bool,
};
Spacer.defaultProps = {
  large: false,
  small: false,
};
export default Spacer;
