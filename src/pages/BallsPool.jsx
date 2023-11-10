import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Pool_Buttons from '../components/Pool_Buttons'
import Power_Button from '../components/Power_Button';
import Pool_Image from '../components/Pool_Image';
function BallsPool({ navigation }) {
  return (
    <ScrollView>
      <Power_Button/>
      <Pool_Image/>
      <Pool_Buttons/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Ajusta el ancho de la imagen según sea necesario
    height: 200, // Ajusta la altura de la imagen según sea necesario
    position: 'absolute',
    top: '50%', // Ubica la imagen en el centro superior
    transform: [{ translateY: -100 }], // Ajusta para centrar la imagen
  },
 
});

export default BallsPool;