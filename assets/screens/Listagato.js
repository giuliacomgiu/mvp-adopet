import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import Listagempet from './Listagempet';
import Listacao from './Listacao';
import Listaoutros from './Listaoutros';
import CardPets from '../../components/CardPets';

export default function Listagato() {
 
  const navigation = useNavigation();
 
  const pet1 = {
    fotocardpet: require('../src/catioro.png'),
    nomepet: "Catioro",
    sexopet: "Macho",
    idadepet: "3 anos",
    porte: "Grande",
    raca: "SRD",
    personalidade: "Brincalhão",
    descricao: "Catioro é um amigo muito brincalhão e agitado, que gosta de correr em grandes quintais e gastar sua energia! Também é muito alegre e carinhoso e adora crianças!",
    abrigo: "abrigo",
  }
  
  const pet2 = {
    fotocardpet: require('../src/gatinea.png'),
    nomepet: "Gatinea",
    sexopet: "Fêmea",
    idadepet: "3 anos",
    porte: "Pequeno",
    raca: "SRD",
    personalidade: "Manhosa",
    descricao: "Gatínea é uma amiga dócil e manhosa, que adora um carinho e um aconchego! Também é um pouquinho preguiçosa e adora ficar dormindo, principalmente quando está deitada perto de seus novos amigos!",
    abrigo: "abrigo",
  }
  
  const pet3 = {
    fotocardpet: require('../src/cacti.png'),
    nomepet: "Cacti",
    sexopet: "Macho",
    idadepet: "1 anos",
    porte: "não definido",
    raca: "Cacatua",
    personalidade: "Falador",
    descricao: "Cacti é uma cacatua alegre, divertida e curiosa! E adora comer!",
    abrigo: "abrigo",
  }
  

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
	              <TouchableOpacity onPress={() => navigation.navigate('Listacao')}>
	                <Image source={require('../src/botao_cao.png')}
	                  style={{width: 50, height: 50, margin: 10,}} />
	              </TouchableOpacity>
	  
	                <Image source={require('../src/botao_gato.png')}
	                  style={{width: 50, height: 50, margin: 10,}} />
	              
	              <TouchableOpacity onPress={() => navigation.navigate('Listaoutros')}>
	                <Image  source={require('../src/botao_outros.png')}
	                 style={{width: 50, height: 50, margin: 10,}} />
            </TouchableOpacity>
         </View>
        </View>

        <View style={{width: '100%'}}>
          <Text style={[styles.title, {marginTop: 5, marginBottom: 10, textAlign: 'center',}]}>GATOS CHEIOS DE AMOR!</Text>
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
          <CardPets pet={pet2} style={{flex: 1,}}/>
          <CardPets pet={pet1}/>
        </View>
      </ScrollView>
     </View> 
    </View>
  );
}