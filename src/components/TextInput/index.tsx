import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import PropTypes from 'prop-types';

import { colors } from '../../theme/colors';

import Styles from './Styles';

interface ICustomTextInputProps {
  isPassword?: boolean;
  leftIcon?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad';
  otp?: boolean;
}

const CustomTextInput: React.FC<ICustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  isPassword = false,
  leftIcon = '',
  otp = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer}>
        {leftIcon !== '' && (
          <TouchableOpacity>
            <Icon name={leftIcon} size={30} color={colors.iconEye} style={Styles.leftIcon} />
          </TouchableOpacity>
        )}

        {otp ? (
          <View style={Styles.otpView}>
            <OTPInputView
              pinCount={6}
              style={Styles.otpInputView as never}
              autoFocusOnLoad
              editable
              keyboardAppearance="default"
              placeholderTextColor="#4C4C4C"
              // selectionColor='#4C4C4C'
            />
          </View>
        ) : (
          <TextInput
            style={Styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            secureTextEntry={isPassword ? !showPassword : false}
            keyboardType={keyboardType}
          />
        )}
      </View>

      {isPassword && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={showPassword ? 'eye' : 'eyeo'}
            size={30}
            color={colors.iconEye}
            style={Styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

CustomTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default CustomTextInput;
