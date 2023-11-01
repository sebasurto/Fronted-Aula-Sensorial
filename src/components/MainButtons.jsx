import React from 'react'; 
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function MainButtons({ navigation }) {
  return (
    <View>
      <Text>Vista principal</Text>
      <Button
        title="Sala audiovisual"
        onPress={() => navigation.navigate('AudiovisualSystem')}
      />
      <Button
        title="Piscina de pelotas"
        onPress={() => navigation.navigate('BallsPool')}
      />
      <Button
        title="Cuarto de burbujas"
        onPress={() => navigation.navigate('BubbleRoom')}
      />
      <Button
        title="Iluminación general"
        onPress={() => navigation.navigate('CommonIlumination')}
      />
      <Button
        title="Sistema Táctil"
        onPress={() => navigation.navigate('TactileSystem')}
        
      />
      <Button
        title="Cuarto de tubos"
        onPress={() => navigation.navigate('TubeRoom')}
      />
    </View>
  );
}

export default MainButtons