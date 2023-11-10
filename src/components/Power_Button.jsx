import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Power_Button({ navigation }) {
    return (  
        <View>
            <MainButton
            iconName="power"
            />
        </View>
    );
}
const MainButton = ({ title, onPress, iconName }) => {
    return (
      <Pressable style={styles.pressable} onPress={onPress}>
        <Ionicons name={iconName} size={40} color="#ffffff" />
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
        backgroundColor: "#4c65cc",
        borderRadius: 100,
        alignItems: "center", // vertical
        justifyContent: 'center', // horizontal
        alignSelf: 'center',
        padding: 30,
        marginTop: 30,
        width: 100,
        height: 100,
      },
      text: {
        color: "#ffffff",
        fontSize: 16,
      },
});
export default  Power_Button;