import { StyleSheet } from 'react-native';

import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {},
  shadow: {
    shadowColor: theme.BLACK,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    // elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});
