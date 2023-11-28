import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Pool_Buttons from "../components/Pool_Buttons";

function Pool_Image({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/pool.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300, // Ajusta el ancho de la imagen según sea necesario
    height: 300, // Ajusta la altura de la imagen según sea necesario
    position: "relative",
    alignSelf: "center",
    marginTop: 20,
  },
});

export default Pool_Image;
