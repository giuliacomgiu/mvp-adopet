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
    textoForm: {
      color: '#000000',
      fontSize: 16,
      paddingBottom: 5,
    },
    containerForm:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EEEEEE',
      paddingHorizontal: 10,
      paddingLeft: 5,
    },
    titleForm:{
      fontSize: 18,
      marginVertical: 10,
      color: '#000000',
      fontWeight: 'bold',
      margin: 4,
      textAlign: 'center',
    },
    input:{
      width: '100%',
      height: 40,
      backgroundColor: '#CCCCCC',
      paddingHorizontal: 8,
      marginBottom: 12,
      color: '#000000',
    },
    button:{
      height: 40,
      backgroundColor: '#444444',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 18,
    },
    buttonContact:{
      width: '100%',
      height: 40,
      backgroundColor: '#45D800',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tagView: {
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        alignContent: 'space-between',
    },
    list: {
      margin: 20,
      
    }

  });

  export default styles;