import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Pool_Buttons from "../components/Pool_Buttons";
import Power_Button from "../components/Power_Button";
import Pool_Image from "../components/Pool_Image";
function BallsPool({ navigation }) {
  return (
    <View style={styles.container}>
      <Pool_Image />
      <Pool_Buttons />
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
