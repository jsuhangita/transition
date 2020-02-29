import { theme } from '../../../styles/core.style';
import { fontSizeLarge } from '../../../styles/common.style';

export default {
  actionButton__icon: {
    ...fontSizeLarge,
  },
  actionButton__button: {
    paddingHorizontal: theme.paddingSmall,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionMenu__modal: {
    padding: 20,
    backgroundColor: theme.inputBackground,
  },
};
