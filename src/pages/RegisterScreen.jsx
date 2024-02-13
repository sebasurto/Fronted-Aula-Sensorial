import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Alert,
  StyleSheet,
  Pressable,
} from "react-native";
import { apiUrl } from "../../apiUrl";

const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("");

  const registerUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/user`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user,
          password: password,
          name: name,
          lastname: lastname,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        Alert.alert("Registro exitoso", "Usuario registrado correctamente");
        navigation.navigate("Inicio de Sesión");
      } else if (response.status === 400) {
        setError("Todos los campos son requeridos o el usuario ya existe");
      } else if (response.status === 500) {
        setError("Error del servidor interno");
      } else {
        throw new Error(data.message || "Error desconocido al registrar");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.view}>
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Apellido"
          value={lastname}
          onChangeText={setLastname}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Usuario"
          value={user}
          onChangeText={setUser}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.viewPressable}>
        <Pressable style={styles.pressable} onPress={registerUser}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};
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
export default RegisterScreen;
