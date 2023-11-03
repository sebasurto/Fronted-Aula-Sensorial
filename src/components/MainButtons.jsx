import React from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";

function MainButtons({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Flex": require("../../assets/fonts/Roboto_Flex/RobotoFlex.ttf"),
  });

  return (
    <View style={styles.container}>
      <MainButton
        title="Sala audiovisual"
        onPress={() => navigation.navigate("AudiovisualSystem")}
        color="#33FF57"
      />
      <MainButton
        title="Piscina de pelotas"
        onPress={() => navigation.navigate("BallsPool")}
        color="#EADDFF"
        iconName="water-outline"
      />
      <MainButton
        title="Cuarto de burbujas"
        onPress={() => navigation.navigate("BubbleRoom")}
        color="#EADDFF"
        iconName="ellipse-outline"
      />
      <MainButton
        title="Iluminación general"
        onPress={() => navigation.navigate("CommonIlumination")}
        color="#EADDFF"
        iconName="sunny-outline"
      />
      <MainButton
        title="Sistema Táctil"
        onPress={() => navigation.navigate("TactileSystem")}
        color="#EADDFF"
        iconName="thumbs-up-outline"
      />
      <MainButton
        title="Cuarto de tubos"
        onPress={() => navigation.navigate("TubeRoom")}
        color="#EADDFF"
        iconName="musical-notes-outline"
      />
    </View>
  );
}
const MainButton = ({ title, onPress, color, iconName }) => {
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Icon name={iconName} size="3vh" color="#21005D" />
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    width: "20vh",
    height: "20vh",
    borderRadius: "2vh",
    padding: "3vh",
    margin: "1vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2vh",
  },
  buttonText: {
    fontSize: 16,
    color: "#21005D",
    fontFamily: "Roboto-Flex",
  },
});
export default MainButtons;
