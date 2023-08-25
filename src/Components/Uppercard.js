import React from 'react';
import {
  View,
} from 'react-native';
import {
  Car,
  Circle,
} from '../svg/index';
import styles from '../Styles/style';

const Uppercard = () => {
    return (
      <View style={styles.uppercard}>
        <View style={styles.carlogo}>
          <Circle style={styles.circle} />
          <Car style={styles.car} />
        </View>
      </View>
    );
  };

  export default Uppercard;