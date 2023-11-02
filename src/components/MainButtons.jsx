import React from 'react'; 
import { Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function MainButtons({ navigation }) {
  return (
    
    <View style={styles.container}>
      <MainButton
        title="Sala audiovisual"
        onPress={() => navigation.navigate('AudiovisualSystem')}
        color="#33FF57"
      />
      <MainButton
        title="Piscina de pelotas"
        onPress={() => navigation.navigate('BallsPool')}
        color="#FF5733"
      />
      <MainButton
        title="Cuarto de burbujas"
        onPress={() => navigation.navigate('BubbleRoom')}
        color="#5733FF"
      />
      <MainButton
        title="Iluminación general"
        onPress={() => navigation.navigate('CommonIlumination')}
        color="#FF5733"
      />
      <MainButton
        title="Sistema Táctil"
        onPress={() => navigation.navigate('TactileSystem')}
        color="#33FF57"
      />
      <MainButton
        title="Cuarto de tubos"
        onPress={() => navigation.navigate('TubeRoom')}
        color="#5733FF"
      />
    </View>
  );
}
const MainButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
    style={{ ...styles.button, backgroundColor: color }}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Divide en dos columnas
    flexWrap: 'wrap', // Permite que los botones se envuelvan a la siguiente fila si no caben en la pantalla
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default MainButtons