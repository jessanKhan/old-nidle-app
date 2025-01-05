import React, { type FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from './AuthStackNavigator';
// import AuthStackNavigator from './AuthStackNavigator';

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
      {/* <AuthStackNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigator;
