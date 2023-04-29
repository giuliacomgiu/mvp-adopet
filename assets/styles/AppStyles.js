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
     }
    
  });

  export default styles;