import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  buttonGreen: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonBg,
    borderRadius: verticalScale(24),
    height: verticalScale(35)
  },
  buttonWhite: {
    borderWidth: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: verticalScale(24),
    height: verticalScale(35)
  }
});

export default Styles;
