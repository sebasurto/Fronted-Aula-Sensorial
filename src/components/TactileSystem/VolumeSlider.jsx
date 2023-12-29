import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
const VolumeSlider = () => {
  const [volume, setVolume] = useState(0);

  const handleValueChange = (value) => {
    setVolume(value);
  };

  const sliderColor = volume > 0.5 ? 'blue' : 'lightblue';

  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleValueChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.text}>Volumen: {Math.round(volume * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: 300,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 20,
    padding: 24,
    backgroundColor: '#E6E6FA', // Color de fondo del contenedor del slider
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems:'center',
    alignSelf:'center',
  },
  slider: {
    width: '100%',
    height: 50,
  },
  text: {
    alignContent: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
});

export default VolumeSlider;





