import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles/AppStyles';




export default function DetalhePet({route}) {

  const animal = route.params;

  const pet1 = {
    fotocardpet: require('../assets/src/catioro.png'),
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
    fotocardpet: require('../assets/src/gatinea.png'),
    nomepet: "Gatinea",
    sexopet: "Fêmea",
    idadepet: "3 anos",
    porte: "Pequeno",
    raca: "SRD",
    personalidade: "Manhosa",
    descricao: "Gatínea é uma amiga dócil e manhosa, que adora um carinho e um aconchego! Também é um pouquinho preguiçosa e adora ficar dormindo, principalmente quando está deitada perto de seus novos amigos!",
    abrigo: "abrigo",
  }

  return (
     <SafeAreaView>
       <ScrollView>
        <View style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          padding: 10,
          flexWrap: 'wrap',
        }}>
          <View style={{
            flex: 1,
            width: '100%',
            height: 50,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={[styles.titpets]}>DETALHES DO PET</Text>
          </View>
          <View style={{
            flex: 1,
            width: '100%',
            height: 300,
            alignItems: 'center',
          }}>
             <Image source={pet1.fotocardpet} style={[styles.fotopet]} />
          </View>
          <View style={{
            flex: 1,
            width: '100%',
            height: 50,
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <Text style={[styles.nomepets, {alignItems: 'center', textAlign: 'center'}]}>{pet1.nomepet}</Text>
          </View>
          <View style={[styles.detalhespets, {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
          }]}>
               
               <Text style={[styles.textodetpet]}>{pet1.sexopet}</Text>
               <Text style={[styles.textodetpet]}>Idade: {pet1.idadepet}</Text>
               <Text style={[styles.textodetpet]}>Porte: {pet1.porte}</Text>
               <Text style={[styles.textodetpet]}>Raça: {pet1.raca}</Text>
               <Text style={[styles.textodetpet]}>Personalidade: {pet1.personalidade}{'\n'}</Text>
               <Text style={[styles.textodetpet]}>{pet1.descricao}{'\n'}</Text>
               <Text style={[styles.textodetpet]}>{pet1.abrigo}{'\n'}</Text>
          </View>
          <View style={{
            flex: 1,
            width: '100%',
            height: 80,
            alignItems: 'center',
            alignSelf: 'center',
            padding: 20,
          }}>
          <Button title={"Botão"} />
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      );
}