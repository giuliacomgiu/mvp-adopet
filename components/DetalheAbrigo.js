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
  const abrigoId = route.params.id;
  const [abrigo, setAbrigo] = useState([]);

  let getAbrigo = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/abrigos/${abrigoId}`);
      const abrigo = await response.json();
      setAbrigo(abrigo);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAbrigo();
  }, []);

  return (
    <SafeAreaView>
       <FlatList
        data={abrigo}
        showsVerticalScrollIndicator={false}
        renderItem={({ abrigo }) => <Detabrigo data={abrigo} />}
        keyExtractor={(abrigo) => abrigo.id}
      />
    </SafeAreaView>
  );
}

function Detabrigo ({data}) {
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
     width: '100%',
     height: 50,
     alignItems: 'center',
     alignSelf: 'center',
     }}>
     <Text style={[styles.titpets]}>DETALHES DO ABRIGO</Text>
     </View>
     <View style={{
     width: '100%',
     height: 250,
     alignItems: 'center',
     }}>
      <Image source={data.fotoabrigo} style={[styles.fotopet]} />
     </View>
     <View style={{
     flex: 1,
     width: '100%',
     height: 50,
     alignItems: 'center',
     alignSelf: 'center',
     backgroundColor: '#FFFFFF',
     }}>
     </View>
     <View style={[styles.detalhespets, {
     flex: 1,
     width: '100%',
     height: '100%',
     alignItems: 'flex-start',
     }]}>

      <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>{data.nomeabrigo}</Text>
      <Text style={[styles.textodetpet]}>Responsável pelo abrigo: {data.responsavel}</Text>
      <Text style={[styles.textodetpet]}>CNPJ: {data.cnpj}</Text>
      <Text style={[styles.textodetpet]}>Endereço: {data.endereco}</Text>
      <Text style={[styles.textodetpet]}>Cidade: {data.cidade}{'\n'}</Text>
      <Text style={[styles.textodetpet]}>E-mail para contato: {'\n'}{data.email} {'\n'}</Text>
      <Text style={[styles.textodetpet]}>Redes sociais:</Text>
      <Text style={[styles.textodetpet]}>{data.instg}</Text>
      <Text style={[styles.textodetpet]}>{data.fbook}</Text>
      <Text style={[styles.textodetpet]}>{data.outras}{'\n'}</Text>
  

     </View>

     <View style={{
     flex: 1,
     width: '100%',
     height: 80,
     alignItems: 'center',
     alignSelf: 'center',
     padding: 20,
     }}>
     <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>QUER COLABORAR COM O ABRIGO?</Text>
     <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>CLIQUE ABAIXO:</Text>
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