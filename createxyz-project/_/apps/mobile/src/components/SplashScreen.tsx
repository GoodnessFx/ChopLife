import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Svg, Circle, Path } from 'react-native-svg';

const SplashScreen = () => {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0);
  const textFadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Fade in logo animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Fade in text animation (starts after logo begins to appear)
    setTimeout(() => {
      Animated.timing(textFadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }).start();
    }, 500);

    // Navigate to main screen after 4 seconds
    const timer = setTimeout(() => {
      router.replace('/(tabs)/dashboard');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, alignItems: 'center' }}>
        <Svg width="200" height="200" viewBox="0 0 200 200">
          <Circle cx="100" cy="100" r="90" fill="#FFFFFF" />
          <Circle cx="65" cy="80" r="12" fill="#FF8C00" />
          <Circle cx="135" cy="80" r="12" fill="#FF8C00" />
          <Path d="M60,130 Q100,170 140,130" stroke="#FF8C00" strokeWidth="10" fill="none" />
        </Svg>
        <Animated.Text style={[styles.text, { opacity: textFadeAnim }]}>
          ChopLife
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8C00', // Orange background
  },
  logo: {
    width: 200,
    height: 200,
    tintColor: '#FFFFFF', // White logo
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
    marginTop: 20,
    letterSpacing: 1.5,
  },
});

export default SplashScreen;