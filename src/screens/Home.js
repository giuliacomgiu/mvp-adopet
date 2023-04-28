import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/AppStyles';

export default function Home() {
  return (
    <View style={[styles.container]}>
      <ScrollView>
      
      <View style={[styles.centered]}>
        <Image source={require('../assets/banner_peq.png')} style={{width: 327, height: 200, margin: 8, marginTop: 20,}}/>
        <Text style={[styles.title, {marginTop: 30, marginBottom: 30,}]}>BUSQUE POR CATEGORIA</Text>
        <Image source={require('../assets/banner_cao.png')} style={{width: 300, height: 70, margin: 10,}}/>
        <Image source={require('../assets/banner_gato.png')} style={{width: 300, height: 70, margin: 10,}}/>
        <Image source={require('../assets/banner_outros.png')} style={{width: 300, height: 70, margin: 10,}}/>
        <Text style={[styles.title, {marginTop: 30,}]}>NÃO PODE ADOTAR UM PET NO MOMENTO? ENTRE EM CONTATO COM OS ABRIGOS E FAÇA SUA DOAÇÃO! </Text>
        <Text style={styles.title}>(LOCALIZE OS ABRIGOS NAS INFOS DOS PETS DISPONÍVEIS)</Text>
      </View>
      </ScrollView>
    </View>
  );
}