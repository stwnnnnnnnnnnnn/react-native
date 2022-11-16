import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen');
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 2000);
  };

  return (
    <View>
      <Image
        style={styles.stretch}
        source={require('../../assets/Splash_Screen.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: '100%',
    resizeMode: 'cover',
  },
});
