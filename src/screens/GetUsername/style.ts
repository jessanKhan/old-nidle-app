import { ScaledSheet } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nidleLogo: {
    alignSelf: 'center',
    marginBottom: '20%'
  },
  loginLogo: {
    alignSelf: 'center',
    marginBottom: 30
  },
  btnGap: {
    marginVertical: '5%'
  },
  loginBtn: {
    marginLeft: 5
  },
  bottomTxt: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%'
  },
  ResetPassTxt: {
    fontSize: 24,
    fontWeight: '900'
  },
  containerStyle: {
    backgroundColor: 'white',
    margin: 30,
    height: '50%',
    borderRadius: 30
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  emailSentSuccessfullIcon: {
    alignSelf: 'center'
  },
  modalContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#D7D7D7',
    width: '80%',
    alignSelf: 'center',
    marginVertical: '5%'
  }
});

export default Styles;
