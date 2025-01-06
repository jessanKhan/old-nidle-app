import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native'; // Import Animated and Easing

import { NidleLogo } from '@/assets';

import Styles from './style';

const SplashScreen: React.FC = () => {
  const scaleValue = useRef(new Animated.Value(0)).current; // Initial value for scale animation

  useEffect(() => {
    // Configuring the animation
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.cubic, // You can choose a different easing function
      useNativeDriver: true // To improve performance, use the native driver
    }).start();
  }, []);

  return (
    <View style={Styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <NidleLogo style={Styles.nidleLogo} height={'20%'} width={'60%'} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
