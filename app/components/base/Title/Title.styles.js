import { StyleSheet } from 'react-native';
import {
  fontSizeLarge, fontSizeMedium, fontSizeNormal,
  fontSizeSmall,
} from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  title__default: {
    ...fontSizeNormal,
    fontWeight: theme.fontWeightBold,
  },
  title__small: {
    ...fontSizeSmall,
  },
  title__medium: {
    ...fontSizeMedium,
  },
  title__large: {
    ...fontSizeLarge,
  },
});
