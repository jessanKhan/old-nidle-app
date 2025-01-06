import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { NidleIcon, NidleLogo } from '@/assets';
import CustomButtonItem from '@/components/Button';
import CustomTextInput from '@/components/TextInput';
import CustomTextItem from '@/components/TextItem';

import Styles from './style';

const ResetPasswordWithNewPassword: React.FC = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={Styles.container}>
      <NidleLogo style={Styles.nidleLogo} height={'12%'} width={'60%'} />
      <Text style={Styles.ResetPassTxt}>RESET PASSWORD</Text>
      <NidleIcon style={Styles.loginLogo} height={'5%'} width={'45%'} />

      <CustomTextInput
        leftIcon="lock"
        isPassword={true}
        value={newPassword}
        placeholder="New Password"
        keyboardType={'default'}
        onChangeText={text => {
          setNewPassword(text);
        }}
      />

      <CustomTextInput
        leftIcon="lock"
        isPassword={true}
        value={confirmPassword}
        placeholder="Confirm Password"
        keyboardType={'default'}
        onChangeText={text => {
          setConfirmPassword(text);
        }}
      />

      <View style={Styles.btnGap} />
      <CustomButtonItem txt="RESET" />

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

export default ResetPasswordWithNewPassword;
