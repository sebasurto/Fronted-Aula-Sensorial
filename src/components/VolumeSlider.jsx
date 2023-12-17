import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
const VolumeSlider = () => {
  const [volume, setVolume] = useState(0);

  const handleValueChange = (value) => {
    setVolume(value);
  };

  const sliderColor = volume > 0.5 ? 'darkblue' : 'lightblue';

  return (
    <View style={styles.container}>
      <Slider
        style={[styles.slider, { backgroundColor: sliderColor }]}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleValueChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.text}>Volume: {Math.round(volume * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  slider: {
    width: 200,
    height: 40,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
});

export default VolumeSlider;





