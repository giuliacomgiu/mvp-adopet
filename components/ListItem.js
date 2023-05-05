import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/AppStyles';
import { useNavigation } from '@react-navigation/native';


export default function ListItem({data}) {

  const navigation = useNavigation()

  function mostrarDetalhes() {
      navigation.navigate('DetalhePet', data);
  }
  return (
    <TouchableOpacity onPress={mostrarDetalhes}>
    <View style={[styles.cardpets, {width: 150, height: 190, margin: 10,}]}>    
     <Image source={data.fotocardpet} style={[styles.fotocardpets]} />
     <Text style={[styles.titcardpets]}>{data.nomepet}</Text>
     <Text style={[styles.cardpets]}>{data.sexopet}</Text>
     <Text style={[styles.cardpets]}>{data.idadepet}</Text>
    </View>
    </TouchableOpacity>
   )
  }