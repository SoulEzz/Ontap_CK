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

import { Ionicons } from '@expo/vector-icons';

export default function Order({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontWeight: 'bold', marginTop: 2 }}>Order</Text>
        <Text></Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f2f2f2',
          padding: 5,
          width: '90%',
          marginLeft: 20,
          marginTop: 15,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#c67c4e',
            width: '45%',
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text>Deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // backgroundColor: '#c67c4e',
            width: '45%',
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
            marginLeft: 20,
          }}>
          <Text>Pick up</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>
        {' '}
        Delivery Address{' '}
      </Text>
      <View style={{marginLeft:15, marginTop:10}}>
        <Text style={{fontWeight:'bold'}}>Jl. Kpg Sutoyo</Text>
        <Text style={{color:'#b4b4b4'}}> Kpg Sutoyo No. 620, Bilzen, Tanjungbalai </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    backgroundColor: 'white',
    borderRadius: '15px',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
