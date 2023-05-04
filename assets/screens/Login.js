import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';


export default function Login() {
 
const navigation = useNavigation();
    
  return (
   <SafeAreaView>
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
        <Text>Usuário:</Text>
        <Controller 
          control={control} 
          name="userabrigo" 
          render={({ field: {onChange, value} }) => (
             <TextInput 
               style={[styles.input]} 
               onChangeText={onChange} 
               value={value}/>
            )}
        />
        
        <Text>Senha:</Text>
        <TextInput style={[styles.input, {width: 250}]} />
      </View>
      <View style={{
        width: '100%',
        height: 80,
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5,
      }}>
        <Button title="Login"></Button>
      </View>
      <View style={{
        width: '100%',
        height: 80,
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5,
      }}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text style={[styles.title]}> Clique aqui e cadastre-se</Text>
        </TouchableOpacity> 
      </View>
    </View>
    </SafeAreaView>
  );
}
