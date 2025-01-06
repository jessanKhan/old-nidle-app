import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  drawerMenuIcon: {
    width: scale(40),
    height: verticalScale(60),
    justifyContent: 'center',
    alignItems: 'center'
  },

  MidTextIcon: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bellIcon: {
    width: scale(62),
    height: verticalScale(60),
    justifyContent: 'center'
  },

  bellIconText: {
    width: scale(62),
    height: verticalScale(40)
  },
  container: {
    height: verticalScale(41)
  }
});

export default Styles;
