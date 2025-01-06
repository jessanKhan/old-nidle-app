import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { NidleLoginIcon, NidleLogo } from '@/assets';
import CustomButtonItem from '@/components/Button';
import CustomSwitchItem from '@/components/Switch';
import CustomTextInput from '@/components/TextInput';

import Styles from './style';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={Styles.container}>
      <NidleLogo style={Styles.nidleLogo} height={'12%'} width={'60%'} />
      <NidleLoginIcon style={Styles.loginLogo} height={'10%'} width={'30%'} />

      <CustomTextInput
        leftIcon="user"
        isPassword={false}
        value={email}
        placeholder="Enter Your Email"
        keyboardType={'email-address'}
        onChangeText={text => {
          setEmail(text);
        }}
      />

      <CustomTextInput
        leftIcon="lock"
        isPassword={true}
        value={password}
        placeholder="Enter Your Password"
        keyboardType={'default'}
        onChangeText={text => {
          setPassword(text);
        }}
      />

      <View style={Styles.forgotPasswordContainer}>
        <View style={Styles.rememberMeContainer}>
          <CustomSwitchItem
            color="#4C4C4C"
            toggleFunction={() => {
              console.warn('True');
            }}
          />
          <Text style={Styles.rememberMeTxt}>Remember Me</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotCredentialScreen' as never);
          }}>
          <Text style={Styles.forgotCredential}>Forgot Credential?</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.btnGap} />
      <CustomButtonItem txt="LOGIN" />
    </View>
  );
};

export default LoginScreen;
