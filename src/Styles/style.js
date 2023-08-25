import { StyleSheet } from 'react-native';
import Color from '../colors/color';

const styles = StyleSheet.create({
    signup: {
      flex: 1,
    },
    uppercard: {
      flex: 1,
      backgroundColor: Color.white,
    },
  
    carlogo: {
      flex: 1,
      alignItems: 'flex-end',
    },
    circle: {
      marginTop: -60,
      marginRight: -30,
    },
    car: {
      position: 'absolute',
      right: '5%',
    },
    heading: {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    h1: {
      marginTop: '5%',
      color: Color.white,
      fontSize: 36,
      fontFamily: 'Montserrat',
      fontWeight: '800',
  
    },
    h2: {
      color: Color.white,
      fontSize: 16,
      fontFamily: 'Mukta Vaani',
      fontWeight: '500',
      lineHeight: 25,
      letterSpacing: 0.64,
    },
    h3: {
      marginTop: '4%',
      color: Color.white,
      fontSize: 13,
      fontFamily: 'Montserrat',
      fontWeight: '400',
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      width: '80%',
      marginTop: 25,
      borderRadius: 25,
      backgroundColor: Color.white,
    },
    inputText: {
      flex: 1,
      color: Color.lightGrey,
      fontSize: 14,
      fontFamily: 'Montserrat',
      fontWeight: '400',
      marginLeft: '5%',
      paddingHorizontal: 10,
      marginRight: '15%',
    },
    lowercard: {
      flex: 3.5,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: Color.Pink,
    },
    logo: {
      marginLeft: '2%',
    },
    signuptext: {
      textAlign: 'center',
      color: Color.darkPink,
      fontSize: 17,
      fontFamily: 'Poppins',
      fontWeight: '500',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    button: {
      marginTop: '5%',
      width: '60%',
      height: 36,
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 0.7,
      borderColor: Color.darkPink,
      borderStyle: 'solid',
      justifyContent: 'center',
    },
    eye: {
      position: 'absolute',
      right: '5%',
    },
    icons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: '8%',
      width: '100%',
    },
    check: {
      marginRight: '5%',
    },
    checkbox: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '70%',
      alignItems: 'center',
    },
    modalText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalDetail: {
      fontSize: 16,
      marginBottom: 5,
    },
    modalButton: {
      marginTop: 15,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'cyan',
      borderRadius: 5,
    },
    modalButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  export default styles;