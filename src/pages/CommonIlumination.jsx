import React from 'react';
import { View, Text, Button } from 'react-native';
import BackToMain from '../components/BackToMain';
function CommonIlumination({ navigation }) {
  return (
    <View>
      <Text> Iluminacion general</Text>
      <BackToMain navigation={navigation}/>
    </View>
  );
}

export default CommonIlumination;