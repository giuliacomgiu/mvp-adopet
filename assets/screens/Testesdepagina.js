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
import styles from '../styles/AppStyles';
import Abrigostestes from '../../components/Abrigostestes';
import Petstestes from '../../components/Petstestes';



export default function Testesdepagina({route}) {

  const navigation = useNavigation();

  const nomedoabrigo = route?.params;

   const [list, setList] = useState(Abrigostestes);
  
   useState(()=>{
    setList(
        Abrigostestes.filter(item => {
         return (item.nomeabrigo === nomedoabrigo.abrigo ); })
     );
   },
   );
    
   
 return (
    <SafeAreaView>
       <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Detabrigo data={item} />}
          keyExtractor={(item) => item.id}
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
            
            <Text style={[styles.textodetpet]}>Nome do Abrigo: {data.nomeabrigo}</Text>
            <Text style={[styles.textodetpet]}>CNPJ: {data.cnpj}</Text>
            <Text style={[styles.textodetpet]}>Endereço: {data.endereco}</Text>
            <Text style={[styles.textodetpet]}>Cidade: {data.cidade}</Text>
            <Text style={[styles.textodetpet]}>E-mail para contato: {data.email} </Text>
            <Text style={[styles.textodetpet]}>Redes sociais:</Text>
            <Text style={[styles.textodetpet]}>Instagram: {data.instg}</Text>
            <Text style={[styles.textodetpet]}>Facebook: {data.fbook}</Text>
            <Text style={[styles.textodetpet]}>Outras: {data.outras}{'\n'}</Text>
  

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
