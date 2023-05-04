import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'


export default function CadastroAnimal() {
 
const navigation = useNavigation();
const [selected, setSelected] = React.useState("");
const tipoPet = [
  {key:'1', value:'Cães'},
  {key:'2', value:'Gatos'},
  {key:'3', value:'Outros'},
]

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
        height: 60,
        alignItems: 'center',
        margin: 1,
      }}>
        <Text style={[styles.titleForm, {width: 320}]}>CADASTRO DO ANIMAL</Text>
        

      </View>
      <View style={{
        width: '100%',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        margin: 5,        
      }}>

        <Text style={[styles.textoForm]}>Usuário: *</Text>
        <Controller 
          control={control} 
          name="tipopet" 
          render={({ field: {onChange, value} }) => (
            <SelectList 
                setSelected={setSelected}
                data={tipoPet} 
                value={value}
                onChangeText={onChange}  
                />
            
            )}
        />

        <Text style={styles.textoForm}>Nome do animal:</Text>
        <Controller
          control={control}
          name="nomeanimal"
          render={({ field: {onChange, value} }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoForm}>Idade (definir anos e meses): </Text>
        <Controller
          control={control}
          name="idade"
          render={({ field: {onChange, value} }) => (
              <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              />
          )}
        />

        <Text style={styles.textoForm}>Sexo</Text>
        <Controller
          control={control}
          name="sexo"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoForm}>Porte:</Text>
        <Controller
          control={control}
          name="porte"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoForm}>Raça:</Text>
        <Controller
          control={control}
          name="raca"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.textoForm}>Personalidade:</Text>
        <Controller
          control={control}
          name="personalidade"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={[styles.textoForm]}>Descrição do animal:</Text>
        <Controller
          control={control}
          name="descricao"
          render={({ field: {onChange, value} }) => (
            
            <TextInput
              style={[styles.input, {height: 120, textAlignVertical: 'top'}]}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        
        <Text style={styles.textoForm}>Fotos do animal: </Text>

        <Controller
          control={control}
          name="fotopet1"
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
          name="fotopet2"
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
          name="fotopet3"
          render={({ field: {onChange, value} }) => (
              <TextInput
              style={[styles.input, {width: 250}]}
              onChangeText={onChange}
              value={value}
            />
          )}
        />


        <TouchableOpacity style={[styles.button, {width: 250}]} onPress={handleSubmit(handleSignIn)}>
          <Text style={[styles.buttonText]}>SALVAR ALTERAÇÕES</Text>
        </TouchableOpacity>
     
        </View>
       </View>
     </ScrollView> 
    </SafeAreaView>
  );
}