import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/AppStyles';
import { useNavigation } from '@react-navigation/native';
import DetalhePet from './DetalhePet';


export default function CardPets({pet}) {

  const navigation = useNavigation()

  function mostrarDetalhes() {
      navigation.navigate('DetalhePet', pet);
  }

  return (
    <TouchableOpacity onPress={mostrarDetalhes}>
    <View style={[styles.cardpets, {width: 150, height: 190, margin: 10,}]}>    
     <Image source={pet.fotocardpet} style={[styles.fotocardpets]} />
     <Text style={[styles.titcardpets]}>{pet.nomepet}</Text>
     <Text style={[styles.cardpets]}>{pet.sexopet}</Text>
     <Text style={[styles.cardpets]}>{pet.idadepet}</Text>
    </View>
    </TouchableOpacity>
   )
  }