import React from 'react';
import { View, Text, Button } from 'react-native';
import MainButtons from '../components/MainButtons';
import styles from '../styles/styles';
function MainScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.title} >Panel de Control</Text>
      <MainButtons navigation={navigation} />
    </View>
    
  );
}

export default MainScreen