import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

function SliderControl ({ value, onValueChange }) {
    const [sliderValue, setSliderValue] = useState(0);
return ( 
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.slider}
        value={value}
        onValueChange={onValueChange}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#0000FF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
      />
    </View>
    );
};
const styles = StyleSheet.create({
    sliderContainer: {
        width:300,
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
        alignSelf:'center',
      },
      slider: {
        width: '100%',
        height: 40,
      },

  });
export default SliderControl;