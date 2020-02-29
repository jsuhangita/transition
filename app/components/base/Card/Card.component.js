import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './Card.styles';

const Card = (props) => {
  const {
    header, body, footer,
    style: styleOverride,
  } = props;
  const headerComponent = typeof header === 'object'
    ? header
    : <Text style={styles.card__header}>{header}</Text>;
  const bodyComponent = typeof body === 'object'
    ? body
    : <Text style={styles.card__body}>{body}</Text>;
  const footerComponent = typeof footer === 'object'
    ? footer
    : <Text style={styles.card__footer}>{footer}</Text>;
  return (
    <View style={[styles.card, styleOverride]}>
      {headerComponent}
      {bodyComponent}
      {footerComponent}
    </View>
  );
};
Card.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
Card.defaultProps = {
  style: {},
  header: null,
  body: null,
  footer: null,
};
export default Card;
