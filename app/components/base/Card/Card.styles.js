import { StyleSheet } from 'react-native';
import { fontSizeLarge, fontSizeNormal } from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  card: {
    backgroundColor: theme.white,
    marginBottom: theme.paddingLarge,
  },
  card__header: {
    ...fontSizeLarge,
    padding: theme.padding,
  },
  card__body: {
    ...fontSizeNormal,
    padding: theme.padding,
  },
  card__footer: {
    ...fontSizeNormal,
    padding: theme.padding,
  },
});
