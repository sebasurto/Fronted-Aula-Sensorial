import React from 'react';
import { ScrollView} from 'react-native';
import styles from '../styles/styles';
import Tac_Sys_Buttons from '../components/Tac_Sys_Buttons'
import VolumeSlider from '../components/VolumeSlider';
function TactileSystem({ navigation }) {
  return (
    <ScrollView style= {styles.main_view}>
      <VolumeSlider/>
      <Tac_Sys_Buttons/>
    </ScrollView>
  );
}

export default TactileSystem;