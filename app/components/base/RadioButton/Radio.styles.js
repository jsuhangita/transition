import { StyleSheet } from 'react-native';
import { FONT_SIZE_NORMAL } from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: theme.PADDING,
    paddingVertical: theme.PADDING_SMALL,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
  },

  text: {
    ...FONT_SIZE_NORMAL,
    marginLeft: theme.PADDING_SMALL,
  },

  icon: {
    marginLeft: theme.PADDING_SMALL,
  },
});
