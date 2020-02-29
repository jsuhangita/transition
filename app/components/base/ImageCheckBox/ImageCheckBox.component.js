import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View, ViewPropTypes, ImageBackground, Text,
} from 'react-native';
import { noop } from 'lodash';
import Touchable from '../Touchable/Touchable.component';
import styles from './ImageCheckBox.styles';

export default class ImageCheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      onSelect: false,
    };
    this._onCancelSelect = this._onCancelSelect.bind(this);
    this._selectImage = this._selectImage.bind(this);
  }

  componentDidUpdate() {
    const { onSelect } = this.state;
    const { canSelect } = this.props;
    if (onSelect && !canSelect) {
      this._onCancelSelect();
    }
  }

  _onCancelSelect() {
    this.setState({ onSelect: false });
  }

  _selectImage() {
    const { onSelect } = this.state;
    const { onPress } = this.props;
    this.setState({
      onSelect: !onSelect,
    }, onPress(!onSelect));
  }

  render() {
    const { onSelect } = this.state;
    const {
      style: styleOverride,
      source, canSelect, onPress, onLongPress,
      total,
    } = this.props;
    const imageStyles = [
      styles.imageCheckBox__container,
      styleOverride,
    ];
    const handlePress = canSelect ? this._selectImage : onPress;
    const canPress = total < 10 ? handlePress : noop;
    return (
      <Touchable onPress={canPress} onLongPress={onLongPress}>
        <ImageBackground
          style={imageStyles}
          source={source}
        >
          {
            canSelect && onSelect
              ? (
                <View style={styles.imageCheckBox__iconContainer}>
                  <Text style={styles.imageCheckBox__icon}>&#10003;</Text>
                </View>
              )
              : null
          }
        </ImageBackground>
      </Touchable>
    );
  }
}
ImageCheckBox.propTypes = {
  canSelect: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  source: PropTypes.object,
  style: ViewPropTypes.style,
  total: PropTypes.number,
};

ImageCheckBox.defaultProps = {
  canSelect: false,
  onPress: noop,
  onLongPress: noop,
  source: {},
  style: {},
  total: 0,
};
