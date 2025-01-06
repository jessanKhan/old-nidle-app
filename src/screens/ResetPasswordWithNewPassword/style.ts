import { ScaledSheet } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  nidleLogo: {
    alignSelf: 'center',
    marginBottom: 40
  },
  loginLogo: {
    alignSelf: 'center',
    marginBottom: 30
  },
  btnGap: {
    marginVertical: '5%'
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%'
  },
  rememberMeContainer: { flexDirection: 'row' },
  rememberMeTxt: { color: '#131212' },
  forgotCredential: { color: '#7D7D7D' },
  ResetPassTxt: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center'
  },
  loginBtn: {
    marginLeft: 5
  },
  bottomTxt: { flexDirection: 'row', justifyContent: 'center', marginTop: '10%' }
});

export default Styles;
