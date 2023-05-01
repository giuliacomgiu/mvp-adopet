import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import Listagempet from './Listagempet';
import Listacao from './Listacao';
import Listagato from './Listagato';

export default function Listaoutros() {
 
    const navigation = useNavigation();
   
    return (
      <View style={[styles.container]}>
        <View style={{width: '100%', height: 60, marginBottom: 15,}}>
          <View style={{flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',}}>
            <TouchableOpacity onPress={() => navigation.navigate('Listagem pet')}>
              <Image source={require('../src/botao_todos.png')}
                style={{width: 50, height: 50, margin: 10,}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Listacao')}>
              <Image source={require('../src/botao_cao.png')}
                style={{width: 50, height: 50, margin: 10,}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Listagato')}>
              <Image source={require('../src/botao_gato.png')}
                style={{width: 50, height: 50, margin: 10,}} />
            </TouchableOpacity>
      
              <Image  source={require('../src/botao_outros.png')}
               style={{width: 50, height: 50, margin: 10,}} />
          </View>
        </View>
       
        <ScrollView style={{width: '100%'}}>
           <Image source={{uri: 'https://placehold.jp/300x600.png'}}
              style={{width: 300, height: 600, margin: 10,}} />
        </ScrollView>
      </View>
    );
  }