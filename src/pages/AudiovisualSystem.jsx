import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function AudiovisualSystem({ navigation }) {
  return (
    <View style={styles.firstView}>
      <Image
        source={require("../images/tv.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.secondView}>
        <View style={styles.volumeView}>
          <Pressable style={styles.volumeUp}>
            <Ionicons name="add" size={30} color="#ffffff"></Ionicons>
          </Pressable>
          <Pressable style={styles.volumeDown}>
            <Ionicons name="remove" size={30} color="#ffffff"></Ionicons>
          </Pressable>
        </View>
        <View style={styles.buttonsView}>
          <Pressable style={styles.volumeMute}>
            <Ionicons name="volume-mute" size={30} color="#ffffff"></Ionicons>
          </Pressable>
          <Pressable style={styles.uploadFile}>
            <Ionicons name="arrow-up" size={30} color="#ffffff"></Ionicons>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff',
  },
  secondView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  volumeUp: {
    backgroundColor: "#4c65cc",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  volumeDown: {
    backgroundColor: "#4c65cc",
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  volumeMute: {
    backgroundColor: "#4c65cc",
    padding: 30,
    borderRadius: 30,
  },
  uploadFile: {
    backgroundColor: "#4c65cc",
    padding: 30,
    borderRadius: 30,
  },

  text: {
    color: "#ffffff",
    fontSize: 16,
  },
  volumeView: {
    flexDirection: "column",
    borderRadius: 30,
  },
  buttonsView: {
    gap: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default AudiovisualSystem;
