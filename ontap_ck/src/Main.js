import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';

export default function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')}>
        <TouchableOpacity style={styles.btn_get}>
          <Text
            style={{ marginTop: '10px', color: 'white', fontWeight: 'bold' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  btn_get: {
    backgroundColor: '#d2691e',
    height: '40px',
    alignItems: 'center',
    width: '90%',
    marginLeft: '45px',
    borderRadius: '10px',
    position: 'relative',
    marginTop:730
  },
});
