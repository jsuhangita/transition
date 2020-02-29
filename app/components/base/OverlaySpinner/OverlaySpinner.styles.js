import { StyleSheet } from 'react-native';
import { fullScreenAbsolute } from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  container: {
    ...fullScreenAbsolute,
    backgroundColor: theme.overlayBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
