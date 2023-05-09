import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles/AppStyles';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'
import { onChange } from 'react-native-reanimated';


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

        <Text style={[styles.textoForm]}>Tipo de animal (preenchimento obrigatório):</Text>
        <Controller 
          control={control} 
          name="tipopet" 
          render={({ field: {onChange, value} }) => (
            <SelectList 
                setSelected={(value) => onChange(value)}
                data={tipoPet} 
                save = "value"
                value= {value}
                selected={onChange}  
                dropdownStyles={{backgroundColor: '#FFFFFF',  maxHeight: 130, width: 200}}
                dropdownItemStyles={{marginHorizontal: 4,}}
                dropdownTextStyles={{color: '#000000'}}
                boxStyles={{width: 300, backgroundColor: '#CCCCCC'}}
                />
            
            )}
        />

        <Text style={styles.textoForm}>{'\n'}Nome do animal:</Text>
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

        
        
        <Text style={styles.textoForm}>Fotos do animal: </Text>

        <View style={{
        width: 300,
        padding: 2,
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}>
         {/*  linha */}
          <View style={{
            padding: 2,
            width: 250,
            flexDirection: 'row',
          }}>
            <View style={{
            }}> 
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
            </View>
            
            <View style={{
              width: 50,
              height: 30,
              paddingLeft: 15,
            }}>
              <TouchableOpacity style={[styles.button, {width: 40,}]}>
                <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
          
          {/*  linha */}
	            <View style={{ 
	              padding: 2,
	              width: 250,
	              flexDirection: 'row',
	            }}>
	              <View style={{
	              }}> 
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
	              </View>
	              
	              <View style={{
	                width: 50,
	                height: 30,
                    paddingLeft: 15,
	              }}>
	                <TouchableOpacity style={[styles.button, {width: 40}]}>
	                  <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>+</Text>
	                </TouchableOpacity>
	              </View>
	  
          </View>
          
           {/*  linha */}
	  	            <View style={{
	  	              padding: 2,
	  	              width: 250,
	  	              flexDirection: 'row',
	  	            }}>
	  	              <View style={{
	  	              }}> 
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
	  	              </View>
	  	              
	  	              <View style={{
	  	                width: 50,
	  	                height: 30,
                        paddingLeft: 15,
	  	              }}>
	  	                <TouchableOpacity style={[styles.button, {width: 40}]}>
	  	                  <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>+</Text>
	  	                </TouchableOpacity>
	  	              </View>
              </View>
            </View>
         
	  	  

        <TouchableOpacity style={[styles.button, {width: 250}]} onPress={handleSubmit(handleSignIn)}>
          <Text style={[styles.buttonText]}>SALVAR ALTERAÇÕES</Text>
        </TouchableOpacity>


      
     
        </View>
       </View>
     </ScrollView> 
    </SafeAreaView>
  );
}