import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/core.style';
import { FONT_SIZE_SMALL } from '../../../styles/common.style';

export default StyleSheet.create({
  errIcon: {
    ...FONT_SIZE_SMALL,
    color: theme.red,
    paddingRight: 5,
  },
  errorText: {
    ...FONT_SIZE_SMALL,
    color: theme.red,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: theme.PADDING_SMALL,
    paddingHorizontal: theme.PADDING_SMALL,
  },
});
