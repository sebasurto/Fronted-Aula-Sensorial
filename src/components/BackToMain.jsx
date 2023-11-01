import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function BackToMain({ navigation }) {
  return (
    <View>
      <Text>Botón de regreso</Text>
      <Button
        title="Ir a la vista principal"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}

export default BackToMain