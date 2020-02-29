import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../../styles/core.style';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
});

export default function Container(props) {
  const {
    children,
    style: styleOverride,
  } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styleOverride]}>
        {children}
      </View>
    </SafeAreaView>
  );
}


Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};
Container.defaultProps = {
  style: {},
};
