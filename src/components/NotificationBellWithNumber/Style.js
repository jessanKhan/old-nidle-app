import { scale, ScaledSheet } from 'react-native-size-matters';

import { colors } from '@/theme/colors';

const Styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    width: 35,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FF5555',
    borderWidth: 2,
    borderColor: '#fff'
  },
  active: {
    backgroundColor: colors.success
  },
  inActive: {
    backgroundColor: colors.white
  },
  borderStyle: {
    borderEndWidth: 1,
    borderColor: colors.gray
  },
  itemCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftColStyle: {
    borderTopLeftRadius: scale(14),
    borderBottomLeftRadius: scale(14)
    // backgroundColor: colors.success,
  },
  rightColStyle: {
    borderTopRightRadius: scale(14),
    borderBottomRightRadius: scale(14)
    // backgroundColor: colors.success,
  },
  marginExtra: {
    marginLeft: 20
  }
});

export default Styles;
