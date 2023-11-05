import React from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";

function TactileSystem({ navigation }) {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.view}>
      <View style={styles.viewTextInput}>
        <Text>Usuario</Text>
        <TextInput
          style={styles.textInput}
          value={userName}
          placeholder="usuario"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <Text>Contraseña</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder="contraseña"
          secureTextEntry={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </View>
      <View style={styles.viewPressable}>
        <Pressable>
          <Text>Olvidaste la contraseña</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Controlador central")}
        >
          <Text style={styles.text}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  viewTextInput: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 10,
  },
  viewPressable: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 20,
    width: 300,
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
    padding: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default TactileSystem;
