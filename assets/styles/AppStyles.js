import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: "center",
      alignItems: "center",
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#EEEEEE',
      padding: 0,
    },
    centered: {
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: '#000000',
      margin: 10,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
     },
    cardpets: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      fontSize: 12,
      textAlign: 'left',
      margin: 2,
      marginLeft: 5,
    },
    titcardpets: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
      margin: 2,
      marginLeft: 5,
    },
    fotocardpets: {
      width: 150,
      height: 120,
      margin: 0,
    },
    fotopet: {
      width: '100%',
      height: 300,
    },
    titpets: {
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 2,
      marginLeft: 5,
    },
    nomepets: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      fontSize: 34,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 2,
      marginLeft: 5,
    },
    detalhespets: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      textAlign: 'left',
    },
    textodetpet: {
      margin: 5,
      fontSize: 16,
    },
    caixastexto: {
        backgroundColor: '#CCCCCC',
        borderColor: '#000000',
        borderWidth: 1,
        color: '#000000',
        padding: 3,
        margin: 5,
    },
    textoform: {
      color: '#000000',
      margin: 5,
      fontSize: 14,
    
    },

  });

  export default styles;