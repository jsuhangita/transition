import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapperContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.overlayBackground,
  },
  innerContainer: {
  },
});
