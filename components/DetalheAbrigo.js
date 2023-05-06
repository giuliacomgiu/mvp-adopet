import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles/AppStyles';
import Abrigostestes from './Abrigostestes';



export default function DetalheAbrigo({route}) {

  const navigation = useNavigation();

  const nomedoabrigo = route.params;

   const [list, setList] = useState(Abrigostestes);
  
   useState(()=>{
       setList(
          Abrigostestes.filter(item => {
            return (item.nomeabrigo.indexOf(nomedoabrigo.abrigo) > -1 ); })
       );
     },
  );

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
       <Text style={[styles.titpets]}>DETALHES DO ABRIGO</Text>
       </View>
       <View style={{
         flex: 1,
         width: '100%',
         height: 300,
         alignItems: 'center',
       }}>
          <Image source={list.fotocardpet} style={[styles.fotopet]} />
       </View>
       <View style={{
         flex: 1,
         width: '100%',
         height: 50,
         alignItems: 'center',
         alignSelf: 'center',
         backgroundColor: '#FFFFFF',
       }}>
       <Text style={[styles.nomepets, {alignItems: 'center', textAlign: 'center'}]}>{list.nomepet}</Text>
       </View>
       <View style={[styles.detalhespets, {
         flex: 1,
         width: '100%',
         height: '100%',
         alignItems: 'flex-start',
       }]}>
            
            <Text style={[styles.textodetpet]}>Nome do Abrigo: {list.nomeabrigo}</Text>
            <Text style={[styles.textodetpet]}>CNPJ: {list.nomeabrigo}</Text>
            <Text style={[styles.textodetpet]}>Endereço: {list.nomeabrigo}</Text>
            <Text style={[styles.textodetpet]}>Cidade: {list.nomeabrigo}</Text>
            <Text style={[styles.textodetpet]}>E-mail para contato: {list.nomeabrigo}</Text>
            <Text style={[styles.textodetpet]}>Redes sociais:</Text>
            <Text style={[styles.textodetpet]}>Instagram: {list.nomeabrigo}</Text>
            <Text style={[styles.textodetpet]}>Facebook: {list.nomeabrigo}</Text>
            <Text style={[styles.textodetpet]}>Outras: {list.nomeabrigo}{'\n'}</Text>
  

       </View>
       <View style={{
         flex: 1,
         width: '100%',
         height: 80,
         alignItems: 'center',
         alignSelf: 'center',
         padding: 20,
       }}>
         <TouchableOpacity style={[styles.buttonContact, {width: 250}]} >
           <Text style={[styles.buttonText]}>CONTATO (WHATSAPP)</Text>
         </TouchableOpacity>
       </View>

      </View>
     </ScrollView>
   </SafeAreaView>
   );
}
