import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import { useForm, Controller } from 'react-hook-form';


export default function Login() {
 
const navigation = useNavigation();

const { control, handleSubmit, formState: { errors } } = useForm({})

function handleSignIn(data){
   console.log(data);
  }
    
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
        <Text style={[styles.textoForm]}>Usuário:</Text>
        <Controller 
          control={control} 
          name="userabrigo" 
          render={({ field: {onChange, value} }) => (
             <TextInput 
               style={[styles.input, {width: 250}]} 
               onChangeText={onChange} 
               value={value}/>
            )}
        />

        <Text style={[styles.textoForm]}>Senha:</Text>
        <Controller
          control={control}
          name="senha"
          render={({ field: {onChange, value} }) => (
            <TextInput
              style={[styles.input, {width: 250}]}
              onChangeText={onChange}
              value={value}
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


      <TouchableOpacity style={[styles.button, {width: 150}]} onPress={handleSubmit(handleSignIn)}>
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
          <Text style={[styles.title]}> Clique aqui e cadastre-se</Text>
        </TouchableOpacity> 
      </View>
    </View>

    </ScrollView>
    </SafeAreaView>
  );
}
