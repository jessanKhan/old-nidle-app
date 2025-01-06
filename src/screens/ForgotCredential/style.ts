import { ScaledSheet } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  container: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  nidleLogo: { alignSelf: 'center', marginBottom: '20%' },
  btnGap: { marginVertical: '2%' },
  loginBtn: {
    marginLeft: 5
  },
  bottomTxt: { flexDirection: 'row', justifyContent: 'center', marginTop: '10%' }
});

export default Styles;
