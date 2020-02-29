import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  container: {
    padding: theme.PADDING,
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {},
});
