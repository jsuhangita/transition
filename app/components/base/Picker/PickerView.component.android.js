import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';
import { noop } from 'lodash';
import styles from './PickerView.styles.android';

export default class PickerView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.selectedValue,
    };
    this.onSelect = this.onSelect.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onSelect(value) {
    const { onSelect } = this.props;
    this.setState({ value }, () => {
      onSelect(value);
    });
  }

  renderItem(option, i) {
    const { valueKey, labelKey } = this.props;
    return (
      <Picker.Item
        key={`option${i}`}
        value={option[valueKey]}
        label={option[labelKey]}
      />
    );
  }

  render() {
    const { value } = this.state;
    const { options = [] } = this.props;
    return (
      <Picker
        style={styles.picker}
        selectedValue={value}
        onValueChange={this.onSelect}
      >
        {options.map(this.renderItem)}
      </Picker>
    );
  }
}
PickerView.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
};

PickerView.defaultProps = {
  onSelect: noop,
  selectedValue: '',
  labelKey: '',
  valueKey: '',
};
