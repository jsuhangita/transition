import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ViewPropTypes } from 'react-native';
import { noop } from 'lodash';
import Modal from '../Modal/Modal.component';
import Spacer from '../Spacer/Spacer.component';
import Button from '../Button/Button.component';
import { Alert } from '../../../utils/RNHelpers.util';
import styles from './ActionMenu.styles';
import { language } from '../../../languages';

export default class ActionMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.modalTimeout = null;
    this.onPressEdit = this.onPressEdit.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressAction = this.onPressAction.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  onPressEdit() {
    const { onPressEdit } = this.props;
    this.setState({
      modalVisible: false,
    }, onPressEdit);
  }

  onPressDelete() {
    const { onPressDelete } = this.props;
    this.setState({
      modalVisible: false,
    }, () => {
      // set time out because of this bug
      // https://github.com/facebook/react-native/issues/10471
      if (this.modalTimeout) {
        clearTimeout(this.modalTimeout);
      }
      this.modalTimeout = setTimeout(() => {
        Alert.alert(language.ACTION_MENU__DELETE_CONFIRMATION_TITLE,
          language.ACTION_MENU__DELETE_CONFIRMATION_MESSAGE,
          [
            { text: language.COMMON__CANCEL },
            { text: language.COMMON__OK, onPress: onPressDelete },
          ]);
        this.modalTimeout = null;
      }, 500);
    });
  }

  onPressAction(onPress) {
    this.setState({
      modalVisible: false,
    }, onPress);
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
    if (this.modalTimeout) {
      clearTimeout(this.modalTimeout);
    }
  }

  renderChildren() {
    const { children, editText, deleteText } = this.props;
    if (children) {
      return React.Children.map(children, (child) => React.cloneElement(child, {
        onPress: () => this.onPressAction(child.props.onPress),
      }));
    }
    return (
      <View>
        <Button
          onPress={this.onPressEdit}
          text={editText}
          transparent
          leftText
        />
        <Spacer />
        <Button
          onPress={this.onPressDelete}
          text={deleteText}
          transparent
          leftText
        />
      </View>
    );
  }

  render() {
    const { modalVisible } = this.state;
    const {
      style: styleOverride,
      textStyle: textStyleOverride,
      buttonProps,
      buttonComponent,
      icon,
    } = this.props;
    const buttonStyles = [
      styles.actionButton__button,
      styleOverride,
    ];
    const textStyles = [
      styles.actionButton__icon,
      textStyleOverride,
    ];
    return (
      <View>
        {
          buttonComponent ? React.cloneElement(buttonComponent, {
            onPress: this.showModal,
          }) : (
            <Button
              icon={icon}
              onPress={this.showModal}
              transparent
              style={buttonStyles}
              textStyle={textStyles}
              {...buttonProps}
            />
          )
        }

        <Modal
          animationType="fade"
          visible={modalVisible}
          onClose={this.hideModal}
          closeOnTouchOutside
        >
          <View style={styles.actionMenu__modal}>
            {this.renderChildren()}
          </View>
        </Modal>
      </View>
    );
  }
}
ActionMenu.propTypes = {
  onPressEdit: PropTypes.func,
  onPressDelete: PropTypes.func,
  children: PropTypes.node,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  icon: PropTypes.string,
  buttonComponent: PropTypes.node,
  buttonProps: PropTypes.object,
  editText: PropTypes.string,
  deleteText: PropTypes.string,
};
ActionMenu.defaultProps = {
  onPressEdit: noop,
  onPressDelete: noop,
  children: null,
  style: {},
  textStyle: {},
  icon: 'dot',
  buttonComponent: null,
  buttonProps: {},
  editText: language.ACTION_MENU__EDIT,
  deleteText: language.ACTION_MENU__DELETE,
};
