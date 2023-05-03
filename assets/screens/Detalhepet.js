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
        <SafeAreaView>
        <View style={{
            flex: 1,
            width: '100%',
            height: 300,
            minHeight: 300,
            alignItems: 'center',
            alignContent: 'flex-start',
            flexWrap: 'wrap',
          }}>
              <View style={{flex: 1, width: '100%', height: 50, }}>
                <Text style={[styles.title, {textAlign: 'center'}]}>DETALHES DO PET</Text>
              </View>
            
              <View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', alignContent: 'flex-start', flexWrap: 'wrap',}}>

              </View>
            
              <View style={{flex: 1, width: '100%', height: 80, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', alignContent: 'center', flexWrap: 'wrap',}}>
              <Button title="ENTRE EM CONTATO (WHATSAPP)"/>
              </View>
        </View>
        </SafeAreaView>
    );
}