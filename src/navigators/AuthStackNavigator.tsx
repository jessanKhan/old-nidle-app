import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CapacityAnalysis,
  ForgotCredentialScreen,
  GetUsernameScreen,
  HomeScreen,
  LoginScreen,
  ResetPasswordScreen,
  ResetPasswordWithNewPassword,
  ResetPasswordWithOTPScreen
} from '@/screens';

const Stack = createNativeStackNavigator();

function AuthStackNav(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotCredentialScreen" component={ForgotCredentialScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="ResetPasswordWithOTPScreen" component={ResetPasswordWithOTPScreen} />
      <Stack.Screen name="ResetPasswordWithNewPassword" component={ResetPasswordWithNewPassword} />
      <Stack.Screen name="GetUsernameScreen" component={GetUsernameScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CapacityAnalysis" component={CapacityAnalysis} />

      {/* <Stack.Screen name="AppStack" component={AppStackNavigator} /> */}
    </Stack.Navigator>
  );
}

export default AuthStackNav;
