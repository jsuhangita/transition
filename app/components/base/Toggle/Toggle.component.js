import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, View, Text } from 'react-native';
import { noop } from 'lodash';
import { theme } from '../../../styles/core.style';
import styles from './Toggle.styles';

export default class Toggle extends PureComponent {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(value) {
    const { onChange, name } = this.props;
    onChange({
      value, name, type: 'toggle',
    });
  }

  render() {
    const { value, label } = this.props;
    return (
      <View style={styles.toggle__container}>
        <Text>
          {label}
        </Text>
        <Switch
          onValueChange={this._onChange}
          value={value}
          trackColor={theme.tertiary}
        />
      </View>
    );
  }
}
Toggle.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
};
Toggle.defaultProps = {
  value: false,
  onChange: noop,
  label: '',
  name: '',
};
