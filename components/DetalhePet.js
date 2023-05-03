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

  const animal = route?.params;

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
             <Image source={animal.fotocardpet} style={[styles.fotopet]} />
          </View>
          <View style={{
            flex: 1,
            width: '100%',
            height: 50,
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <Text style={[styles.nomepets, {alignItems: 'center', textAlign: 'center'}]}>{animal.nomepet}</Text>
          </View>
          <View style={[styles.detalhespets, {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
          }]}>
               
               <Text style={[styles.textodetpet]}>{animal.sexopet}</Text>
               <Text style={[styles.textodetpet]}>Idade: {animal.idadepet}</Text>
               <Text style={[styles.textodetpet]}>Porte: {animal.porte}</Text>
               <Text style={[styles.textodetpet]}>Raça: {animal.raca}</Text>
               <Text style={[styles.textodetpet]}>Personalidade: {animal.personalidade}{'\n'}</Text>
               <Text style={[styles.textodetpet]}>{animal.descricao}{'\n'}</Text>
               <Text style={[styles.textodetpet]}>{animal.abrigo}{'\n'}</Text>
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
     
   