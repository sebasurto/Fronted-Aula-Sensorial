import React from 'react';
import { View, Text, Button } from 'react-native';
import BackToMain from '../components/BackToMain';
function BubbleRoom({ navigation }) {
  return (
    <View>
      <Text> Cuarto de burbujas</Text>
      <BackToMain navigation={navigation}/>
    </View>
  );
}

export default BubbleRoom;