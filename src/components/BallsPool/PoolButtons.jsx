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

function Pool_Buttons({ changeColor, identifier }) {
  return (
    <View style={styles.button_container}>
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
          handleButtonClick(COLORS.WHITE.backgroundColor);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button_container: {
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
