import React from 'react';
import { View, Text } from 'react-native';
import BackToMain from '../components/BackToMain';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function AudiovisualSystem({ navigation }) {
  return (
    <View>
      <Text> Salón Audiovisual</Text>
      <BackToMain navigation={navigation}/>
    </View>
  );
}

export default AudiovisualSystem;