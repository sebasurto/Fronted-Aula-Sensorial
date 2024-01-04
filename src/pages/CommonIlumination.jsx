import React from "react";
import { ScrollView, Image, View, StyleSheet } from "react-native";
import SliderControl from "../components/TubeRoom/SliderControl";
import styles from "../styles/styles";
import TubeRoomButtons from "../components/TubeRoom/TubeRoomButtons";

function CommonIlumination({ navigation }) {
  return (
    <ScrollView style={styles.mainView}>
      <SliderControl />
      <View>
        <Image
          source={require("../images/room.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TubeRoomButtons />
    </ScrollView>
  );
}

const styles_2 = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default CommonIlumination;
