import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Modal, PaperProvider, Portal, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { EmailSentSuccessfulIcon, NidleIcon, NidleLogo } from '@/assets';
import CustomButtonItem from '@/components/Button';
import CustomTextInput from '@/components/TextInput';
import CustomTextItem from '@/components/TextItem';

import Styles from './style';

const GetUsernameScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const showModal = (): void => {
    setVisible(true);
  };
  const hideModal = (): void => {
    setVisible(false);
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={Styles.containerStyle}>
          <View style={Styles.logoContainer}>
            <EmailSentSuccessfulIcon style={Styles.emailSentSuccessfullIcon} />
            <View style={Styles.modalContainer} />

            <CustomTextItem
              txt="An email has been sent to your mail with username. Please check your inbox or spam folder."
              textAlign="center"
              fontSize={16}
              fontWeight="400"
              color="#4C4C4C"
            />
            <View style={Styles.btnGap} />
            <CustomButtonItem pressFunction={hideModal} txt="OK" />
            <View style={Styles.btnGap} />
          </View>
        </Modal>
      </Portal>

      <View style={Styles.container}>
        <NidleLogo style={Styles.nidleLogo} height={'12%'} width={'60%'} />
        <Text style={Styles.ResetPassTxt}>GET USERNAME</Text>
        <NidleIcon style={Styles.loginLogo} height={'5%'} width={'45%'} />
        <CustomTextInput
          leftIcon="mail"
          isPassword={false}
          value={email}
          placeholder="Enter Your Email"
          keyboardType={'email-address'}
          onChangeText={text => {
            setEmail(text);
          }}
        />

        <View style={Styles.btnGap} />
        <CustomButtonItem pressFunction={showModal} txt="RESET" />
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
    </PaperProvider>
  );
};

export default GetUsernameScreen;
