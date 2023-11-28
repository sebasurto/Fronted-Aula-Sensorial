import React from "react";
import { Text, View, StyleSheet, Pressable, FlatList } from "react-native";

function Pool_Buttons({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.circle,
          styles.centerButton,
          { backgroundColor: "#4988E7", borderColor: "#427AD0" },
        ]}
      />
      <Pressable
        style={[
          styles.circle,
          {
            backgroundColor: "#E73C3C",
            borderColor: "#D03636",
          },
        ]}
      />
      <Pressable
        style={[
          styles.circle,
          { backgroundColor: "#81E533", borderColor: "#74CE2E" },
        ]}
      />
      <Pressable
        style={[
          styles.circle,
          styles.centerButton,
          { backgroundColor: "#FFFFFF", borderColor: "#E5E5E5" },
        ]}
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
