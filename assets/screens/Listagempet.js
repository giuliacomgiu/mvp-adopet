import * as React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';


export default function Listagempet() {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <ScrollView>
      
      <View style={[styles.centered]}>
        <Text style={[styles.title, {marginTop: 30,}]}>NÃO PODE ADOTAR UM PET NO MOMENTO? ENTRE EM CONTATO COM OS ABRIGOS E FAÇA SUA DOAÇÃO! </Text>
        <Button title="Listagem Cães" onPress={() => navigation.navigate('Listacao')} />

        <Text style={styles.title}>(LOCALIZE OS ABRIGOS NAS INFOS DOS PETS DISPONÍVEIS)</Text>
      </View>
      </ScrollView>
    </View>
  );
}