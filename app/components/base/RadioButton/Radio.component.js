import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import styles from './Radio.styles';
import Touchable from '../Touchable/Touchable.component';
import Icon from '../Icon/Icon.component';

export default class Radio extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const { onPress, item } = this.props;
    onPress(item);
  }

  render() {
    const { item, value } = this.props;
    return (
      <View style={styles.container}>
        <Touchable
          style={styles.circle}
          onPress={this._onPress}
        >
          {value === item.id && <View style={styles.checkedCircle} />}
        </Touchable>
        {
          item.icon ? (
            <Icon name={item.icon} style={styles.icon} />
          ) : null
        }
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
}

Radio.propTypes = {
  item: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
};

Radio.defaultProps = {
  value: '',
  onPress: noop,
};
