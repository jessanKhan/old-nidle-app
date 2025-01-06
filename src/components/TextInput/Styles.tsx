import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'gray',
    marginVertical: '3%'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  input: {
    height: verticalScale(50),
    width: '76%',
    marginStart: 5,
    alignSelf: 'center',
    backgroundColor: colors.inputBack,
    fontSize: verticalScale(14)
  },
  icon: {
    // position: 'absolute',
    right: verticalScale(15),
    top: verticalScale(-15),
    position: 'absolute'
  },
  leftIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 50,
    padding: 8,
    zIndex: 1
  },
  otpInputView: {
    width: '85%',
    height: verticalScale(35),
    borderBottomColor: colors.buttonBg,
    marginLeft: 15
  },
  otpView: {
    flexDirection: 'row'
  }
});

export default Styles;
