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
import styles from './src/styles/AppStyles';
import Home from './src/screens/Home';
import Listagempet from './src/screens/Listagempet';


function LogoTitle() {
  return (
    <View style={[styles.centered]}>
      <Image source={require('./src/assets/logo.png')} style={{width: 150, height: 40, marginLeft: 40,}} />
    </View>
  );
}

function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home />
    </View>
  );
}

function Gerenciar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Listagempet />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Inicio} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
      <Drawer.Screen name="Gerenciar Abrigo" component={Gerenciar} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}