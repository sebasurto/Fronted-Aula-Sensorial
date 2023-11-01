import React from 'react';
import { View, Text, Button } from 'react-native';
import BackToMain from '../components/BackToMain';
function TactileSystem({ navigation }) {
  return (
    <View>
      <Text> Sistema Táctil</Text>
      <BackToMain navigation={navigation}/>
    </View>
  );
}

export default TactileSystem;