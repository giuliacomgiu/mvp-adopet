import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import Listagempet from './Listagempet';
import Listacao from './Listacao';
import Listagato from './Listagato';
import ListItem from '../../components/ListItem';
import Petstestes from '../../components/Petstestes';

export default function Listaoutros({ navigation }) {
  const [pets, setPets] = useState([]);
  let getPets = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/pets?tipo=Outros`);
      const pets = await response.json();
      setPets(pets);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

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
            <TouchableOpacity onPress={() => navigation.navigate('Listagato')}>
              <Image source={require('../src/botao_gato.png')}
                style={{width: 50, height: 50, margin: 10,}} />
            </TouchableOpacity>
      
              <Image  source={require('../src/botao_outros.png')}
               style={{width: 50, height: 50, margin: 10,}} />
          </View>
        </View>
       
        <View style={{width: '100%'}}>
          <Text style={[styles.title, {marginTop: 5, marginBottom: 10, textAlign: 'center',}]}>ANIMAIS CHEIOS DE AMOR!</Text>
        </View>
        

        <FlatList
            data={pets}
            style={[styles.list, {width: '100%'}]}
            WrapperStyle={styles.tagView}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ListItem data={item} />}
            keyExtractor={(item) => item.id}
          />

      

     </View> 
    </View>
    
  );
}