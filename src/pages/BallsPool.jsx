import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Pool_Buttons from "../components/BallsPool/PoolButtons";
import Pool_Image from "../components/BallsPool/PoolImage";
function BallsPool({ navigation }) {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Estado inicial de color de fondo

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Pool_Image />
      <Pool_Buttons changeColor={changeBackgroundColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BallsPool;
