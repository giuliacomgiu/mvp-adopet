import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function CadastroAbrigo() {
 
const navigation = useNavigation();
    
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
        height: 100,
        alignItems: 'center',
        margin: 1,
      }}>
        <Text style={[styles.title]}>PREENCHA O FORMULÁRIO ABAIXO PARA EFETUAR SEU CADASTRO</Text>
        <Text>(EXCLUSIVO PARA ADMINISTRADORES DE ABRIGOS)</Text>
      </View>
      <View style={{
        width: '100%',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        margin: 5,
        
      }}>
        <Text style={styles.textoform}>Usuário:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Senha:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Confirme a senha:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Nome do abrigo:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Responsável:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>CNPJ:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Endereço:</Text>
        <TextInput style={[styles.caixastexto, {width: 300, height: 200}]} />
        <Text style={styles.textoform}>Cidade:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>CEP:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>E-mail para contato:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Whatsapp:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Redes Sociais:</Text>
        <Text style={styles.textoform}>Instagram:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Facebook:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Outras:</Text>
        <TextInput style={[styles.caixastexto, {width: 300}]} />
        <Text style={styles.textoform}>Fotos do local:</Text>
        <TextInput style={[styles.caixastexto, {width: 200}]} /><Button title="+" />
        <TextInput style={[styles.caixastexto, {width: 200}]} /><Button title="+" />
        <TextInput style={[styles.caixastexto, {width: 200}]} /><Button title="+" />
      </View>
      <View style={{
        width: '100%',
        height: 80,
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5,
      }}>
        <Button title="Cadastrar"></Button>
      </View>
     
      </View>
     </ScrollView> 
    </SafeAreaView>
  );
}