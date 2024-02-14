import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Audio } from "expo-av";

function TubeRoom({ navigation }) {
  const [mode, setMode] = useState("bateria");

  const [bateria1, setBateria1] = useState();
  const [bateria2, setBateria2] = useState();
  const [bateria3, setBateria3] = useState();

  const [piano1, setPiano1] = useState();
  const [piano2, setPiano2] = useState();
  const [piano3, setPiano3] = useState();

  async function playTube1() {
    if (mode == "bateria") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/cuartodetubos/bateria1.wav")
      );
      setBateria1(sound);
      await sound.playAsync();
    } else if (mode == "piano") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/cuartodetubos/piano1.wav")
      );
      setPiano1(sound);
      await sound.playAsync();
    }
  }

  async function playTube2() {
    if (mode == "bateria") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/cuartodetubos/bateria2.wav")
      );
      setBateria2(sound);
      await sound.playAsync();
    } else if (mode == "piano") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/cuartodetubos/piano2.wav")
      );
      setPiano2(sound);
      await sound.playAsync();
    }
  }

  async function playTube3() {
    if (mode == "bateria") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/cuartodetubos/bateria3.wav")
      );
      setBateria3(sound);
      await sound.playAsync();
    } else if (mode == "piano") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/cuartodetubos/piano3.wav")
      );
      setPiano3(sound);
      await sound.playAsync();
    }
  }

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
        <Pressable
          style={styles.button}
          onPress={() => {
            setMode("bateria");
          }}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            setMode("piano");
          }}
        />
        <Pressable style={styles.button} />
      </View>
      <View style={styles.horizontal_down}>
        <Pressable
          style={{ ...styles.tube, backgroundColor: "#81E533" }}
          onPress={playTube1}
        />
        <Pressable
          style={{ ...styles.tube, backgroundColor: "#FFD600" }}
          onPress={playTube2}
        />
        <Pressable
          style={{ ...styles.tube, backgroundColor: "#4988E7" }}
          onPress={playTube3}
        />
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
    backgroundColor: "#ffffff",
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
