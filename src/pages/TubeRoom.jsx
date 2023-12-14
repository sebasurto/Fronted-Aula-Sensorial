import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function TubeRoom({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.horizontal_up}>
        <Image
          source={require("../images/drums.png")}
          style={styles.square}
          resizeMode="center"
        />
        <Image
          source={require("../images/keyboard.png")}
          style={styles.square}
          resizeMode="cover"
        />
        <Image
          source={require("../images/upload.png")}
          style={styles.square}
          resizeMode="cover"
        />
      </View>
      <View style={styles.rectangle}>
        <Pressable style={styles.button}></Pressable>
        <Pressable style={styles.button}></Pressable>
        <Pressable style={styles.button}></Pressable>
      </View>
      <View style={styles.horizontal_down}>
        <View style={{ ...styles.tube, backgroundColor: "#81E533" }}></View>
        <View style={{ ...styles.tube, backgroundColor: "#FFD600" }}></View>
        <View style={{ ...styles.tube, backgroundColor: "#4988E7" }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  horizontal_up: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 55,
  },
  horizontal_down: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 35,
  },
  square: {
    width: 78,
    height: 78,
    borderRadius: 10,
    backgroundColor: "white",
  },
  rectangle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 95,
    width: "100%",
    height: 78,
    backgroundColor: "white",
  },
  tube: {
    width: 100,
    height: 155,
    borderRadius: 30,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "gray",
  },
});

export default TubeRoom;
