import { StyleSheet } from 'react-native';

import { viewportWidth } from '../../../utils/device.util';
import { theme } from '../../../styles/core.style';
import { fontSizeLarge, fullScreenAbsolute, rowCenter } from '../../../styles/common.style';

export default StyleSheet.create({
  imageCheckBox__container: {
    height: viewportWidth,
    width: viewportWidth,
    backgroundColor: theme.transparent,
  },

  imageCheckBox__box: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },

  imageCheckBox__iconContainer: {
    ...fullScreenAbsolute,
    ...rowCenter,
    backgroundColor: theme.overlayBackground,
  },

  imageCheckBox__icon: {
    ...fontSizeLarge,
    color: theme.white,
  },
});
