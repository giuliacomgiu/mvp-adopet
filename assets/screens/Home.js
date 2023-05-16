import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import Listagempet from './Listagempet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export default function Home() {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


  React.useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('@asyncStorage:token');
      const usuario = await AsyncStorage.getItem('@asyncStorage:usuario');

      if (token) {
        // Token found, verify its validity
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          // Token expired
          setIsLoggedIn(false);
          await AsyncStorage.removeItem('@asyncStorage:token');
        } else {
          // Token valid
          setIsLoggedIn(true);
          console.log('Usuário ' + usuario + ' Logado!');
        }
      } else {
        // Token not found
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoggedIn){
    return (
      <SafeAreaView>
      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false} >
        
        <View style={[styles.centered]}>
          <Image source={require('../src/banner_peq.png')} style={{width: 327, height: 200, margin: 8, marginTop: 1,}}/>
          <Text style={[styles.title, {marginTop: 30, marginBottom: 30,}]}>BUSQUE POR CATEGORIA</Text>
   
          <TouchableOpacity onPress={() => navigation.navigate('Listacao')}>
            <Image source={require('../src/banner_cao.png')} style={{width: 300, height: 70, margin: 10,}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Listagato')}>
            <Image source={require('../src/banner_gato.png')} style={{width: 300, height: 70, margin: 10,}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Listaoutros')}>
            <Image source={require('../src/banner_outros.png')} style={{width: 300, height: 70, margin: 10,}}/>
          </TouchableOpacity>
          <Text style={[styles.title, {marginTop: 30,}]}>NÃO PODE ADOTAR UM PET NO MOMENTO? ENTRE EM CONTATO COM OS ABRIGOS E FAÇA SUA DOAÇÃO! </Text>
          <Text style={styles.title}>(LOCALIZE OS ABRIGOS NAS INFOS DOS PETS DISPONÍVEIS)</Text>

         </View>
        </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
  else{
    return (
      <SafeAreaView>
      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false} >
        
        <View style={[styles.centered]}>
          <Image source={require('../src/banner_peq.png')} style={{width: 327, height: 200, margin: 8, marginTop: 1,}}/>
          <Text style={[styles.title, {marginTop: 30, marginBottom: 30,}]}>BUSQUE POR CATEGORIA</Text>
   
          <TouchableOpacity onPress={() => navigation.navigate('Listacao')}>
            <Image source={require('../src/banner_cao.png')} style={{width: 300, height: 70, margin: 10,}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Listagato')}>
            <Image source={require('../src/banner_gato.png')} style={{width: 300, height: 70, margin: 10,}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Listaoutros')}>
            <Image source={require('../src/banner_outros.png')} style={{width: 300, height: 70, margin: 10,}}/>
          </TouchableOpacity>
          <Text style={[styles.title, {marginTop: 30,}]}>NÃO PODE ADOTAR UM PET NO MOMENTO? ENTRE EM CONTATO COM OS ABRIGOS E FAÇA SUA DOAÇÃO! </Text>
          <Text style={styles.title}>(LOCALIZE OS ABRIGOS NAS INFOS DOS PETS DISPONÍVEIS)</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.title, {marginTop: 20, marginBottom: 50, color: '#229933'}]}>TEM UM ABRIGO E QUER CADASTRAR SEUS PETS? CLIQUE AQUI PARA EFETUAR O SEU CADASTRO</Text>
          </TouchableOpacity>

         </View>
        </ScrollView>
      </View>
      </SafeAreaView>
    );

  }
}
