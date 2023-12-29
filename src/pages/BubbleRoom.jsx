import React from 'react';
import { ScrollView } from 'react-native';
import SliderControl from '../components/TubeRoom/SliderControl';
import TubeImage from '../components/TubeRoom/TubeImage';
import styles from '../styles/styles';
import TubeRoomButtons from '../components/TubeRoom/TubeRoomButtons';

function BubbleRoom({ navigation }) {
  return (
    <ScrollView style= {styles.mainView}>
      <SliderControl/>
      <TubeImage/>
      <TubeRoomButtons/>
    </ScrollView>
  );
}

export default BubbleRoom;