import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/screens';

const Stack = createNativeStackNavigator();

function AuthStackNav(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      {/* <Stack.Screen name="AppStack" component={AppStackNavigator} /> */}
    </Stack.Navigator>
  );
}

export default AuthStackNav;
