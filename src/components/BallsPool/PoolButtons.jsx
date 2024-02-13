import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import { apiUrl } from "../../../apiUrl";

const COLORS = {
  BLUE: {
    backgroundColor: "#4988E7",
    borderColor: "#427AD0",
  },
  RED: {
    backgroundColor: "#E73C3C",
    borderColor: "#D03636",
  },
  GREEN: {
    backgroundColor: "#81E533",
    borderColor: "#74CE2E",
  },
  WHITE: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
  },
};

const sendDeviceInfo = async (identifier, color) => {
  try {
    const resonse = await fetch(`${apiUrl}/device/identifier/${identifier}`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song: "None",
        volumeLevel: 0,
        color: color,
        intensity: 0,
        video: "None",
      }),
    });
  } catch (error) {
    Alert.alert("Error", error.message || "Error al conectar al servidor");
  }
};

function Pool_Buttons({ changeColor, identifier }) {
  const handleButtonClick = (color) => {
    changeColor(color); // Llama a la función para cambiar el color de fondo en BallsPool
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.circle,
          styles.centerButton,
          {
            backgroundColor: COLORS.BLUE.backgroundColor,
            borderColor: COLORS.BLUE.borderColor,
          },
        ]}
        onPress={() => {
          sendDeviceInfo(identifier, COLORS.BLUE.backgroundColor);
          handleButtonClick(COLORS.BLUE.backgroundColor);
        }}
      />
      <Pressable
        style={[
          styles.circle,
          {
            backgroundColor: COLORS.RED.backgroundColor,
            borderColor: COLORS.RED.borderColor,
          },
        ]}
        onPress={() => {
          sendDeviceInfo(identifier, COLORS.RED.backgroundColor);
          handleButtonClick(COLORS.RED.backgroundColor);
        }}
      />
      <Pressable
        style={[
          styles.circle,
          {
            backgroundColor: COLORS.GREEN.backgroundColor,
            borderColor: COLORS.GREEN.borderColor,
          },
        ]}
        onPress={() => {
          sendDeviceInfo(identifier, COLORS.GREEN.backgroundColor);
          handleButtonClick(COLORS.GREEN.backgroundColor);
        }}
      />
      <Pressable
        style={[
          styles.circle,
          styles.centerButton,
          {
            backgroundColor: COLORS.WHITE.backgroundColor,
            borderColor: COLORS.WHITE.borderColor,
          },
        ]}
        onPress={() => {
          sendDeviceInfo(identifier, COLORS.WHITE.backgroundColor);
          handleButtonClick(COLORS.WHITE.backgroundColor);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    margin: 10,
    borderWidth: 10,
    borderStyle: "solid",
  },
});

export default Pool_Buttons;
