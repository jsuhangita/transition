import { StyleSheet } from 'react-native';
import {
  flex1, flexGrow1, flexRow, spaceBetween,
} from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  content__container: {
    ...flex1,
  },
  contentContainer: {
    ...flexGrow1,
  },
  innerContainer: {},
  content__spaceBetween: { ...spaceBetween },
  content__row: { ...flexRow },
  content__backgroundGrey: { backgroundColor: theme.whiteGrey },
  content__backgroundTransparent: { backgroundColor: theme.transparent },
});
