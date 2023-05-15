import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/AppStyles';
import { useNavigation } from '@react-navigation/native';


export default function ListItem({ data }) {
  const navigation = useNavigation()
  let fotocardpet = require('../assets/src/cacti.png');
  switch (data.especie) {
    case 1:
      fotocardpet = require('../assets/src/catioro.png');
      break;
    case 2:
      fotocardpet = require('../assets/src/gatinea.png');
      break;
    case 3:
      fotocardpet = require('../assets/src/cacti.png');
      break;
    default:
      break;
  };

  function mostrarDetalhes() {
      navigation.navigate('DetalhePet', { id: data.id });
  }
  return (
    <TouchableOpacity onPress={mostrarDetalhes}>
    <View style={[styles.cardpets, {width: 150, height: 190, margin: 10,}]}>
     <Image source={fotocardpet} style={[styles.fotocardpets]} />
     <Text style={[styles.titcardpets]}>{data.nomepet}</Text>
     <Text style={[styles.cardpets]}>{data.sexopet}</Text>
     <Text style={[styles.cardpets]}>{data.idadepet}</Text>
    </View>
    </TouchableOpacity>
   )
  }