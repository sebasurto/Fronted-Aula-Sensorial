import React from 'react';
import { View, Text, Button } from 'react-native';
import BackToMain from '../components/BackToMain';
function TubeRoom({ navigation }) {
  return (
    <View>
      <Text> Cuarto de tubos</Text>
      <BackToMain navigation={navigation}/>
    </View>
  );
}

export default TubeRoom;