import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/AppStyles';
import dadospets from './Petstestes';

export default function Cardteste(props) {

  return (
    <TouchableOpacity>
    <View style={[styles.cardpets, {width: 150, height: 190, margin: 10,}]}>    
     <Image source={props.pet.fotocardpet} style={[styles.fotocardpets]} />
     <Text style={[styles.titcardpets]}>{props.pet.nomepet}</Text>
     <Text style={[styles.cardpets]}>{props.pet.sexopet}</Text>
     <Text style={[styles.cardpets]}>{props.pet.idadepet}</Text>
    </View>
    </TouchableOpacity>
   )
  }