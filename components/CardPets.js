import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles/AppStyles';


export default function CardPets(props) {
  return (
    <View style={[styles.cardpets, {width: 150, height: 190, margin: 10,}]}>    
     <Image source={props.pet.fotocardpet} style={[styles.fotocardpets]} />
     <Text style={[styles.titcardpets]}>{props.pet.nomepet}</Text>
     <Text style={[styles.cardpets]}>{props.pet.sexopet}</Text>
     <Text style={[styles.cardpets]}>{props.pet.idadepet}</Text>
    </View>
   )
  }