import * as React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import Petstestes from '../../components/Petstestes';
import Abrigostestes from '../../components/Abrigostestes';

export default function GerenciaAbrigo() {

  const navigation = useNavigation();

  const [animais_do_abrigo, setList] = useState(Petstestes)

  const [abrigo, setAbrigo] = useState([]);
  
  let getAbrigo = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/abrigos/1`);
      const animal = await response.json();
      setAbrigo(animal);
    } catch (error) {
      console.log(animal)
      console.error(error);
    }
  };

  useEffect(() => {
    getAbrigo();
  }, []);

  return (
    <SafeAreaView>
      <View style={[styles.containerGerencia, {width: 300}]}>
        <View style={{width: '100%'}}>
          <Text style={[styles.title, {marginTop: 30,}]}>ABRIGO {abrigo.nomeabrigo}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CadastroAbrigo')}>
            <Text style={[styles.textodetpet, {color: '#229922', fontWeight: 'bold'}]}>Editar dados do abrigo</Text>
          </TouchableOpacity> 
          
          <Text style={[styles.title, {marginTop: 50, fontSize: 16}]}>GERENCIAR ANIMAIS CADASTRADOS</Text>

          <View style={{
        flex: 1,
        width: 300,
        padding: 2,
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}>
         {/*  linha */}
          <View style={{
            flex: 1,
            padding: 2,
            width: 500,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
            <View style={{
              width: 220,
              height: 30,
            }}> 
                <Text style={{fontSize: 18}}>* Cadastrar novo animal</Text>
            </View>
            
            <View style={{
              width: 50,
              height: 30,
            }}>
              <TouchableOpacity style={[styles.button, {width: 40}]} onPress={() => navigation.navigate('Cadpet')}>
                <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
  
         <FlatList
            data={animais_do_abrigo}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ListPet data={item} />}
            keyExtractor={(item) => item.id}
          />

      </View>
    </View>
    </View>
  </SafeAreaView>
);
}


    function ListPet({data}) {
      return (

        <View style={{
          flex: 1,
          width: 350,
          padding: 2,
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}>
        {/*  linha */}
          <View style={{
            width: '100%',
            padding: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
            <View style={{
              width: 180,
              height: 30,
            }}> 
                <Text style={{fontSize: 18}}>* {data.nomepet}</Text>
            </View>
            
            <View style={{
              width: 40,
              height: 30,
            }}>
              <TouchableOpacity style={[styles.button, {width: 40}]} >
                <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>E</Text>
              </TouchableOpacity>
            </View>

            <View style={{
              width: 10,
              height: 30,
            }}>
              
            </View>

            <View style={{
              width: 40,
              height: 30,
            }}>
              <TouchableOpacity style={[styles.button, {width: 40}]} >
                <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>X</Text>
              </TouchableOpacity>

            </View>
              
          </View>
        </View>
      );
    }