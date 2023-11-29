import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainButtons from "../components/MainButtons";

function MainScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <MainButtons navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});

export default MainScreen;
