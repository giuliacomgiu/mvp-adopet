import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/AppStyles';
import Listagempet from './Listagempet';
import Listagato from './Listagato';
import Listaoutros from './Listaoutros';
import CardPets from '../../components/CardPets';

export default function Detalhepet(){
    return(
        <View style={{
            flex: 1,
            width: 300,
            height: 0,
            minWidth: 300,
            minHeight: 300,
            maxWidth: '100%',
            maxHeight: '100%',
            alignItems: 'center',
            alignContent: 'flex-start',
            flexWrap: 'wrap',
          }}>
              <View style={{flex: 1, width: '100%', height: 50, minWidth: 300, minHeight: 50, maxWidth: '100%', maxHeight: 50, flexWrap: 'wrap',}}>
                <Text style={[styles.title]}>DETALHES DO PET</Text>
              </View>
            
              <View style={{flex: 1, width: '100%', height: 100, minWidth: 300, minHeight: 100, maxWidth: '100%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', alignContent: 'flex-start', flexWrap: 'wrap',}}>

              </View>
            
              <View style={{flex: 1, width: '100%', height: 80, minWidth: 300, minHeight: 80, maxWidth: '100%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', alignContent: 'flex-start', flexWrap: 'wrap',}}>
              <Button>ENTRE EM CONTATO (WHATSAPP)</Button>
              </View>
        </View>
    );
}