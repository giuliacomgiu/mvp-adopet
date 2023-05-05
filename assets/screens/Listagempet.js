import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import Listacao from './Listacao';
import Listagato from './Listagato';
import Listaoutros from './Listaoutros';
import ListItem from '../../components/ListItem';
import Petstestes from '../../components/Petstestes';

export default function Listagempet() {
 
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');

  const [list, setList] = useState(Petstestes);

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

            <Image source={require('../src/botao_todos.png')}
              style={{width: 50, height: 50, margin: 10,}} />

          <TouchableOpacity onPress={() => navigation.navigate('Listacao')}>
            <Image source={require('../src/botao_cao.png')}
              style={{width: 50, height: 50, margin: 10,}} />
          </TouchableOpacity>
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
          <Text style={[styles.title, {marginTop: 5, marginBottom: 10, textAlign: 'center',}]}>ENCONTRE SEU MAIS NOVO AMIGO!</Text>
        </View>
              

          <FlatList
            data={list}
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