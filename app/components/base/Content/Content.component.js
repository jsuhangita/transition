import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ViewPropTypes } from 'react-native';
import styles from './Content.styles';

export default function Content(props) {
  const {
    children,
    row,
    spaceBetween,
    grey,
    transparent,
    style: styleOverride,
    ...otherProps
  } = props;
  const wrapperStyles = [
    styles.content__container,
    (grey) && styles.content__backgroundGrey,
    (transparent) && styles.content__backgroundTransparent,
    (row) && styles.content__row,
    styleOverride,
  ];
  const contentContainerStyles = [
    styles.contentContainer,
    (spaceBetween) && styles.content__spaceBetween,
  ];

  return (
    <ScrollView
      style={wrapperStyles}
      contentContainerStyle={contentContainerStyles}
      keyboardShouldPersistTaps="handled"
      {...otherProps}
    >
      { children }
    </ScrollView>
  );
}

Content.propTypes = {
  row: PropTypes.bool,
  grey: PropTypes.bool,
  transparent: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

Content.defaultProps = {
  row: false,
  grey: false,
  transparent: false,
  spaceBetween: false,
  style: null,
};
