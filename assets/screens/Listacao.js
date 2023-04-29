import * as React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles/AppStyles';


export default function Listacao() {
  return (
    <View style={[styles.container]}>
      <ScrollView>
      
      <View style={[styles.centered]}>
        <Text style={styles.title}>(LOCALIZE OS ABRIGOS NAS INFOS DOS PETS DISPONÍVEIS)</Text>
      </View>
      </ScrollView>
    </View>
  );
}