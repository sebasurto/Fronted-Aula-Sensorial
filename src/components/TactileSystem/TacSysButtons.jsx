import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Audio } from "expo-av";

function Tac_Sys_Buttons({ navigation }) {
  const [sound1, setSound1] = useState();
  const [sound2, setSound2] = useState();
  const [sound3, setSound3] = useState();

  const [sound4, setSound4] = useState();
  const [sound5, setSound5] = useState();
  const [sound6, setSound6] = useState();

  const [sound7, setSound7] = useState();
  const [sound8, setSound8] = useState();
  const [sound9, setSound9] = useState();

  async function playSound1() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido1.wav")
    );
    setSound1(sound);
    await sound.playAsync();
  }

  async function playSound2() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido2.wav")
    );
    setSound2(sound);
    await sound.playAsync();
  }

  async function playSound3() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido3.wav")
    );
    setSound3(sound);
    await sound.playAsync();
  }

  async function playSound4() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido4.wav")
    );
    setSound4(sound);
    await sound.playAsync();
  }

  async function playSound5() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido5.wav")
    );
    setSound5(sound);
    await sound.playAsync();
  }

  async function playSound6() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido6.wav")
    );
    setSound6(sound);
    await sound.playAsync();
  }

  async function playSound7() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido7.mp3")
    );
    setSound7(sound);
    await sound.playAsync();
  }

  async function playSound8() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido8.mp3")
    );
    setSound8(sound);
    await sound.playAsync();
  }

  async function playSound9() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/sistematactil/sonido9.mp3")
    );
    setSound9(sound);
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.frame2}>
          <Pressable style={styles.rectangle} onPress={playSound1} />
          <Pressable style={styles.rectangle} onPress={playSound2} />
          <Pressable style={styles.rectangle} onPress={playSound3} />
        </View>
        <View style={styles.frame2}>
          <Pressable style={styles.rectangle2} onPress={playSound4} />
          <Pressable style={styles.rectangle2} onPress={playSound5} />
          <Pressable style={styles.rectangle2} onPress={playSound6} />
        </View>
        <View style={styles.frame2}>
          <Pressable style={styles.rectangle3} onPress={playSound7} />
          <Pressable style={styles.rectangle3} onPress={playSound8} />
          <Pressable style={styles.rectangle3} onPress={playSound9} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "#ffffff",
    //borderColor: '#000000',
    //borderWidth: 1,
    //height: 640,
    //position: 'relative',
    //width: 360,
  },
  frame: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    justifyContent: "center",
    //left: 48,
    position: "relative",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  frame2: {
    flexDirection: "row",
    alignItems: "flex-start",
    display: "flex",
    gap: 15,
    position: "relative",
  },
  rectangle: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: "rgba(89, 228, 24, 0.5)", // color verde
  },
  rectangle2: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: "rgba(186, 18, 245, 0.5)", // color morado
  },
  rectangle3: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: "rgba(242, 153, 20, 0.5)", // color naranja
  },
});

export default Tac_Sys_Buttons;
