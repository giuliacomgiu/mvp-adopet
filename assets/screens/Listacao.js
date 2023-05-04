import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import Listagempet from './Listagempet';
import Listagato from './Listagato';
import Listaoutros from './Listaoutros';
import Cardteste from '../../components/Cardteste';
import dadospets from '../../components/Petstestes';

export default function Listacao() {
 
  const navigation = useNavigation();
 
  return (
    <View style={[styles.container]}>
     <View style={{
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
      }}>
      <View style={{width: '100%', height: 60, marginBottom: 15, flexWrap: 'wrap',}}>
        <View style={{flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',}}>
          <TouchableOpacity onPress={() => navigation.navigate('Listagem pet')}>
            <Image source={require('../src/botao_todos.png')}
              style={{width: 50, height: 50, margin: 10,}} />
          </TouchableOpacity>
            <Image source={require('../src/botao_cao.png')}
              style={{width: 50, height: 50, margin: 10,}} />
          <TouchableOpacity onPress={() => navigation.navigate('Listagato')}>
            <Image source={require('../src/botao_gato.png')}
              style={{width: 50, height: 50, margin: 10,}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Listaoutros')}>
            <Image  source={require('../src/botao_outros.png')}
             style={{width: 50, height: 50, margin: 10,}} />
          </TouchableOpacity>
         </View>
        </View>

        <View style={{width: '100%'}}>
          <Text style={[styles.title, {marginTop: 5, marginBottom: 10, textAlign: 'center',}]}>CACHORROS CHEIOS DE AMOR!</Text>
        </View>
        

      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false} >
        <View style={{
        flex: 1,
        width: 360,
        height: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'center',
        flexWrap: 'wrap',
      }}>
          <Cardteste pet={dadospets} style={{flex: 1,}}/>
         
        </View>
      </ScrollView>
     </View> 
    </View>
  );
}