import React from 'react';
import {
  View,
} from 'react-native';
import styles from '../Styles/style';
import Lowercard from './Lowercard';
import Uppercard from './Uppercard';



const Signup = () => {
  return (
    <View style={styles.signup}>
      <Uppercard />
      <Lowercard />
    </View>
  );
};


export default Signup;
