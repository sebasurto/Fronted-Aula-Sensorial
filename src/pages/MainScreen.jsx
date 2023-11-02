import React from 'react';
import { View, Text, Button } from 'react-native';
import MainButtons from '../components/MainButtons';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
function MainScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.title} >Selecciona un Juego</Text>
      <MainButtons navigation={navigation} />
    </View>
    
  );
}

export default MainScreen