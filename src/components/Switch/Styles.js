import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  buttonGray: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonBg,
    borderRadius: verticalScale(30),
    height: verticalScale(50),
    alignSelf: 'center'
  },
  buttonWhite: {
    borderWidth: 1,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: verticalScale(30),
    height: verticalScale(50)
  }
});

export default Styles;
