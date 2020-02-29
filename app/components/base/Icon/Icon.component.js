import React from 'react';
import PropTypes from 'prop-types';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../assets/fonts/config.json';
import { theme } from '../../../styles/core.style';

const IcoMoon = createIconSetFromIcoMoon(icoMoonConfig);

export default class Icon extends React.PureComponent {
  render() {
    const {
      size, color, style, ...others
    } = this.props;
    const colorStyle = [
      { color },
      style,
    ];
    return (
      <IcoMoon
        {...others}
        size={size}
        style={colorStyle}
      />
    );
  }
}
Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.any,
};
Icon.defaultProps = {
  size: 20,
  color: theme.GREY,
  style: {},
};
