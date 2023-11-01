import React from 'react';
import { View, Text } from 'react-native';
import BackToMain from '../components/BackToMain';
function BallsPool({ navigation }) {
  return (
    <View>
      <Text> Piscina de pelotas</Text>
      <BackToMain navigation={navigation}/>
    </View>
  );
}

export default BallsPool;