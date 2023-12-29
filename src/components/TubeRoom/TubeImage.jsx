import React from "react";
import { View, Image } from "react-native";
import styles from '../../styles/styles';

function TubeImage() {
  return (
    <View style={styles.containerCenter}>
      <Image
        source={require("../../images/tube.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}


export default TubeImage;