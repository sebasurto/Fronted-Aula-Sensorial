import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Pool_Buttons from "../components/BallsPool/PoolButtons";
import Pool_Image from "../components/BallsPool/PoolImage";
import { apiUrl } from "../../apiUrl";

function BallsPool({ navigation }) {
  const identifier = "piscinadepelotas";

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); // Estado inicial de color de fondo

  const readInfoDevice = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/device/identifier/piscinadepelotas`
      );

      const data = await response.json();

      changeBackgroundColor(data.details.color);
    } catch (error) {
      Alert.alert("Error", error.message || "Error al conectar al servidor");
    }
  };

  readInfoDevice();

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Pool_Image />
      <Pool_Buttons
        changeColor={changeBackgroundColor}
        identifier={identifier}
      />
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
