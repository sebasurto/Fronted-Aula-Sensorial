import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function MainButtons({ navigation }) {
  return (
    <View style={styles.view}>
      <MainButton
        title="Sala audiovisual"
        onPress={() => navigation.navigate("Sala audiovisual")}
        iconName="tv"
      />
      <MainButton
        title="Piscina de pelotas"
        onPress={() => navigation.navigate("Piscina de pelotas")}
        iconName="water"
      />
      <MainButton
        title="Cuarto de burbujas"
        onPress={() => navigation.navigate("Cuarto de burbujas")}
        iconName="ellipse"
      />
      <MainButton
        title="Iluminación general"
        onPress={() => navigation.navigate("Iluminación general")}
        iconName="sunny"
      />
      <MainButton
        title="Sistema táctil"
        onPress={() => navigation.navigate("Sistema táctil")}
        iconName="apps"
      />
      <MainButton
        title="Cuarto de tubos"
        onPress={() => navigation.navigate("Cuarto de tubos")}
        iconName="musical-notes"
      />
    </View>
  );
}
const MainButton = ({ title, onPress, iconName }) => {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <Ionicons name={iconName} size={30} color="#ffffff" />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    rowGap: 10,
  },
  pressable: {
    flexDirection: "row",
    columnGap: 10,
    backgroundColor: "#4c65cc",
    borderRadius: 30,
    alignItems: "center", // vertical
    justifyContent: "flex-start", // horizontal
    marginRight: 30,
    marginLeft: 30,
    padding: 30,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default MainButtons;
