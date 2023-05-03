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
import styles from './assets/styles/AppStyles';
import Home from './assets/screens/Home';
import Listagempet from './assets/screens/Listagempet';
import Listacao from './assets/screens/Listacao';
import Listagato from './assets/screens/Listagato';
import Listaoutros from './assets/screens/Listaoutros';
import Gerabrigo from './assets/screens/Abrigoteste';
import DetalhePet from './components/DetalhePet';


function LogoTitle() {
  return (
    <View style={[styles.centered]}>
      <Image source={require('./assets/src/logo.png')} style={{width: 150, height: 40, marginLeft: 40,}} />
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
      <Gerabrigo />
    </View>
  );
}


function Listapet() {
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

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator useLegacyImplementation>
        <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }}/>
        <Stack.Screen name="Listagem pet" component={Listagempet} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
        <Stack.Screen name="Listacao" component={Listacao} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
        <Stack.Screen name="Listagato" component={Listagato} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
        <Stack.Screen name="Listaoutros" component={Listaoutros} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
        <Stack.Screen name="DetalhePet" component={DetalhePet} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}