import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';
import Tac_Sys_Buttons from '../components/Tac_Sys_Buttons'

function TactileSystem({ navigation }) {
  return (
    <View style= {styles.main_view}>
      <Tac_Sys_Buttons/>
    </View>
  );
}

export default TactileSystem;