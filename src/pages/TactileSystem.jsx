import React from 'react';
import { ScrollView} from 'react-native';
import styles from '../styles/styles';
import TacSysButtons from '../components/TactileSystem/TacSysButtons'
import VolumeSlider from '../components/TactileSystem/VolumeSlider';
function TactileSystem({ navigation }) {
  return (
    <ScrollView style= {styles.mainView}>
      <VolumeSlider/>
      <TacSysButtons/>
    </ScrollView>
  );
}

export default TactileSystem;