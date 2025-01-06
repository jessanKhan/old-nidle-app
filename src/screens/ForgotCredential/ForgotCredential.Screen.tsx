import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NidleLogo } from '@/assets';
import CustomButtonItem from '@/components/Button';
import CustomTextItem from '@/components/TextItem';

import Styles from './style';

const ForgotCredentialScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <NidleLogo style={Styles.nidleLogo} height={'12%'} width={'60%'} />
      <View style={Styles.btnGap} />
      <CustomButtonItem
        pressFunction={() => {
          navigation.navigate('ResetPasswordScreen' as never);
        }}
        txt="Reset Password"
      />
      <View style={Styles.btnGap} />
      <CustomButtonItem
        pressFunction={() => {
          navigation.navigate('GetUsernameScreen' as never);
        }}
        type="white"
        txt="Get Username"
      />
      <View style={Styles.bottomTxt}>
        <CustomTextItem txt="Already have an account?" fontSize={16} fontWeight="400" />
        <TouchableOpacity
          style={Styles.loginBtn}
          onPress={() => {
            navigation.navigate('LoginScreen' as never);
          }}>
          <CustomTextItem txt="Login" fontSize={16} fontWeight="700" color="#4C4C4C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotCredentialScreen;
