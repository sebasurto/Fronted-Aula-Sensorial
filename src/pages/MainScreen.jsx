import React from 'react';
import { View, Text, Button } from 'react-native';
import MainButtons from '../components/MainButtons';
function MainScreen({ navigation }) {
  return (
    <MainButtons navigation={navigation} />
  );
}

export default MainScreen