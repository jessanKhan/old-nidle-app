import React, { type FC, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SplashScreen } from '@/screens';

import AppStackNavigator from './AuthStackNavigator';
// import AuthStackNavigator from './AuthStackNavigator';

const Navigator: FC = () => {
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisloading(!isloading);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {isloading ? <SplashScreen /> : <AppStackNavigator />}

      {/* <AuthStackNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigator;
