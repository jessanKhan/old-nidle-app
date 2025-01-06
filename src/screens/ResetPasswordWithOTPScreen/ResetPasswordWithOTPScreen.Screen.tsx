import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { NidleIcon, NidleLogo } from '@/assets';
import CustomButtonItem from '@/components/Button';
import CustomTextInput from '@/components/TextInput';
import CustomTextItem from '@/components/TextItem';

import Styles from './style';

const ResetPasswordWithOTPScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <NidleLogo style={Styles.nidleLogo} height={'12%'} width={'60%'} />
      <Text style={Styles.ResetPassTxt}>RESET PASSWORD</Text>
      <NidleIcon style={Styles.loginLogo} height={'5%'} width={'45%'} />
      <CustomTextInput
        otp={true}
        isPassword={false}
        value={email}
        placeholder="Enter Your Email"
        keyboardType={'email-address'}
        onChangeText={text => {
          setEmail(text);
        }}
      />

      <CustomTextItem
        txt="Plase enter verification code which has been sent your email!"
        fontSize={14}
        fontWeight="400"
        color="#FF5353"
      />

      <View style={Styles.resendCodeTxt}>
        <CustomTextItem txt="Didn’t get the code?" fontSize={12} fontWeight="400" color="#868686" />
        <TouchableOpacity>
          <CustomTextItem txt="Resend Code" fontSize={12} fontWeight="700" color="#4C4C4C" />
        </TouchableOpacity>
      </View>

      <View style={Styles.btnGap} />
      <CustomButtonItem
        txt="SUBMIT"
        pressFunction={() => {
          navigation.navigate('ResetPasswordWithNewPassword' as never);
        }}
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

export default ResetPasswordWithOTPScreen;
