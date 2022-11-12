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


export default function Screen1({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:500,
    backgroundColor:'white',
    borderRadius:'15px'
  }
})