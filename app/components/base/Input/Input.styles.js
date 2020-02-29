import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/core.style';
import {
  flex1, FONT_SIZE_NORMAL,
} from '../../../styles/common.style';

export default StyleSheet.create({
  wrapper: {
    marginBottom: theme.paddingLarge,
  },
  no_margin: {
    marginBottom: 0,
  },
  container: {
    backgroundColor: theme.transparent,
    borderBottomWidth: 1,
    borderBottomColor: theme.FADE_BORDER,
  },

  outline: {
    backgroundColor: theme.TRANSPARENT,
    borderWidth: 1,
    borderColor: theme.FADE_BORDER,
    borderRadius: theme.BORDER_RADIUS,
  },

  round: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: theme.padding,
    borderBottomWidth: 0,
    borderRadius: 50,
  },

  label: {
    ...FONT_SIZE_NORMAL,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  affixContainer: {
    ...flex1,
  },

  suffixContainer: {
    flex: 2,
    alignItems: 'flex-end',
    paddingRight: theme.PADDING_SMALL,
  },

  suffix: {
    textAlign: 'right',
  },

  iconSuffix: {
    alignItems: 'flex-end',
  },

  textContainer: {
    flex: 8,
    height: 44,
    justifyContent: 'center',
  },

  text: {
    ...FONT_SIZE_NORMAL,
    height: 44,
    color: theme.black,
    paddingLeft: theme.PADDING,
  },

  small: {
    height: 32,
  },

  text_white: {
    color: theme.white,
  },

  border_white: {
    borderBottomColor: theme.white,
  },

  transparent: {
    borderBottomWidth: 0,
  },

  multiline: {
    borderBottomWidth: 1,
  },

  disabledInput: {},

  readOnlyText: {
    ...FONT_SIZE_NORMAL,
    flex: 1,
    color: theme.black,
    paddingLeft: theme.PADDING,
  },
});
