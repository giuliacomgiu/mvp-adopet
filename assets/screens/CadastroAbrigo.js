import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import { useForm, Controller } from 'react-hook-form';

export default function CadastroAbrigo() {
 
const navigation = useNavigation();

const { control, handleSubmit, formState: { errors } } = useForm({})

function handleSignIn(data){
   console.log(data);
  }
    
  return (
   <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={[styles.containerForm, {
      flex: 1,
      width: '100%',
      padding: 1,
      flexWrap: 'wrap',
    }]}>
      <View style={{
        width: '100%',
        height: 150,
        alignItems: 'center',
        margin: 1,
      }}>
        <Text style={[styles.titleForm]}>PREENCHA O FORMULÁRIO ABAIXO PARA EFETUAR SEU CADASTRO</Text>
        <Text>(EXCLUSIVO PARA ADMINISTRADORES DE ABRIGOS)</Text>
        <Text style={{color: '#CC0020'}}>{'\n'}Os campos marcados com "*" são de preenchimento obrigatório</Text>

      </View>
      <View style={{
        width: '100%',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        margin: 5,        
      }}>

        <Text style={[styles.textoform]}>Usuário: *</Text>
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

        <Text style={styles.textoform}>Senha: *</Text>
        <Controller
          control={control}
          name="senha"
          render={({ field: {onChange, value} }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
        />

        <Text style={styles.textoform}>Confirme a senha: *</Text>
        <Controller
          control={control}
          name="confsenha"
          render={({ field: {onChange, value} }) => (
              <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
        />

        <Text style={styles.textoform}>Nome do abrigo: *</Text>
        <Controller
          control={control}
          name="nomeabrigo"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>Nome do responsável: *</Text>
        <Controller
          control={control}
          name="responsavel"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>CNPJ do abrigo: *</Text>
        <Controller
          control={control}
          name="cnpj"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>Endereço: *</Text>
        <Controller
          control={control}
          name="endereco"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={[styles.input, {height: 120}]}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>Cidade: *</Text>
        <Controller
          control={control}
          name="cidade"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>E-mail para contato: *</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>Celular (Whatsapp): *</Text>
        <Controller
          control={control}
          name="celular"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>Redes Sociais: </Text>

        <Text style={styles.textoform}>Instagram:</Text>
        <Controller
          control={control}
          name="insta"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>Facebook:</Text>
        <Controller
          control={control}
          name="fbook"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>Outras: </Text>
        <Controller
          control={control}
          name="redeoutras"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoform}>Fotos do abrigo: </Text>

        <Controller
          control={control}
          name="fotoabrigo1"
          render={({ field: {onChange, value} }) => (
              <TextInput
              style={[styles.input, {width: 250}]}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="fotoabrigo2"
          render={({ field: {onChange, value} }) => (
              <TextInput
              style={[styles.input, {width: 250}]}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="fotoabrigo3"
          render={({ field: {onChange, value} }) => (
              <TextInput
              style={[styles.input, {width: 250}]}
              onChangeText={onChange}
              value={value}
            />
          )}
        />


        <TouchableOpacity style={[styles.button, {width: 250}]} onPress={handleSubmit(handleSignIn)}>
          <Text style={[styles.buttonText]}>Cadastrar</Text>
        </TouchableOpacity>
     
        </View>
       </View>
     </ScrollView> 
    </SafeAreaView>
  );
}