import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '@/theme/colors';

const Styles = ScaledSheet.create({
  searchButton: {
    backgroundColor: colors.buttonColorGray,
    width: scale(82),
    height: verticalScale(34),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  searchGrid: {
    width: scale(94),
    height: verticalScale(40)
  },
  searchRow: {
    height: verticalScale(41)
  },
  itemRow: {
    height: verticalScale(41)
  },
  listIcon: {
    width: scale(50)
  },
  button: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: scale(240)
  },

  allCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropBox: {
    width: '80%',
    paddingHorizontal: 22
  },
  widthExtra: {
    width: '80%'
  },
  lightWidth: { width: '5%' },

  firstRow: {
    paddingLeft: 6,
    paddingRight: 10
  },
  flex1jone: {
    flex: 1
  },
  width100: {
    width: '100%'
  },
  dvider: {
    width: '100%',
    height: 20
  }
});

export default Styles;
