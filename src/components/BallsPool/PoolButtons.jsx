import React from "react";
import { Text, View, StyleSheet, Pressable, FlatList } from "react-native";

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

function Pool_Buttons({ changeColor }) {
  const handleButtonClick = (color) => {
    changeColor(color); // Llama a la función para cambiar el color de fondo en BallsPool
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.circle,
          styles.centerButton,
          { backgroundColor: COLORS.BLUE.backgroundColor, 
            borderColor: COLORS.BLUE.borderColor },
        ]}
        onPress={() => handleButtonClick(COLORS.BLUE.backgroundColor)}
      />
      <Pressable
        style={[
          styles.circle,
          {
            backgroundColor: COLORS.RED.backgroundColor,
            borderColor: COLORS.RED.borderColor,
          },
        ]}
        onPress={() => handleButtonClick(COLORS.RED.backgroundColor)}
      />
      <Pressable
        style={[
          styles.circle,
          { backgroundColor: COLORS.GREEN.backgroundColor,
             borderColor: COLORS.GREEN.borderColor },
        ]}
        onPress={() => handleButtonClick(COLORS.GREEN.backgroundColor)}
      />
      <Pressable
        style={[
          styles.circle,
          styles.centerButton,
          { backgroundColor: COLORS.WHITE.backgroundColor,
             borderColor:COLORS.WHITE.borderColor},
        ]}
        onPress={() => handleButtonClick(COLORS.WHITE.backgroundColor)}
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
