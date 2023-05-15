import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {
 
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm({})
  const [formData, setFormData] = useState({ email: '', senha: '' });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/abrigos/login', formData);
      const { token, user } = response.data;

      //Armazenar o token e o usuário no AsyncStorage
      await AsyncStorage.setItem('@asyncStorage:token', JSON.stringify(token));
      await AsyncStorage.setItem('@asyncStorage:usuario',user.usuario);

      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      //alert('Email ou senha incorretos.');
     alert('Parou aqui.');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={{
          flex: 1,
          width: '100%',
          padding: 10,
          flexWrap: 'wrap',
        }}>
          <View style={{
            width: '100%',
            height: 80,
            alignItems: 'center',
            margin: 1,
          }}>
            <Text style={[styles.title]}>EFETUE SEU LOGIN</Text>
            <Text>(EXCLUSIVO PARA ADMINISTRADORES DE ABRIGOS)</Text>
          </View>
          <View style={{
            width: '100%',
            height: 140,
            alignItems: 'center',
            alignSelf: 'center',
            margin: 5,
            
          }}>
            <Text style={[styles.textoForm]}>Email:</Text>
            <Controller 
              control={control} 
              name="email" 
              render={({ field: {onChange, value} }) => (
                <TextInput 
                  style={[styles.input, {width: 250}]} 
                  onChangeText={text => {
                    onChange(text);
                    setFormData({ ...formData, email: text });
                  }}
                  placeholder="E-mail"
                  value={value}
                />
              )}
            />

            <Text style={[styles.textoForm]}>Senha:</Text>
            <Controller
              control={control}
              name="senha"
              render={({ field: {onChange, value} }) => (
                <TextInput
                  style={[styles.input, {width: 250}]}
                  onChangeText={text => {
                    onChange(text);
                    setFormData({ ...formData, senha: text });
                  }}
                  value={value}
                  placeholder="Senha"
                  secureTextEntry={true}
                />
              )}
            />
          </View>
          <View style={{
            width: '100%',
            height: 80,
            alignItems: 'center',
            alignSelf: 'center',
            margin: 5,
          }}>
            <Text>{'\n'}</Text>

            <TouchableOpacity style={[styles.button, {width: 150}]} onPress={handleSubmit(handleLogin)}>
              <Text style={[styles.buttonText]}>ENTRAR</Text>
            </TouchableOpacity>

          </View>
          <View style={{
            width: '100%',
            height: 80,
            alignItems: 'center',
            alignSelf: 'center',
            margin: 5,
          }}>

            <Text>{'\n'}</Text>

            <Text>Ainda não tem cadastro?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CadastroAbrigo')}>
          <Text style={[styles.title, {color: '#229933', fontSize: 20}]}> Clique aqui e cadastre-se</Text>
        </TouchableOpacity> 
      </View>
    </View>

    </ScrollView>
    </SafeAreaView>
  );
}