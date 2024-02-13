import React from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { apiUrl } from "../../apiUrl";

function Login({ navigation }) {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userName,
          password: password,
        }),
      });

      if (response.status === 200) {
        // Navegar a la pantalla siguiente tras el inicio de sesión exitoso
        navigation.navigate("Controlador central");
      } else if (response.status === 401) {
        Alert.alert("Error", "Credenciales inválidas");
      } else if (response.status === 404) {
        Alert.alert("Error", "Usuario no existe");
      } else if (response.status === 500) {
        Alert.alert("Error", "Error interno del servidor");
      } else {
        const data = await response.json();
        Alert.alert(
          "Error",
          data.message || "Error desconocido al iniciar sesión"
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error.message || "Error al conectar con el servidor"
      );
    }
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.view}>
      <View style={styles.viewTextInput}>
        <Text>Usuario</Text>
        <TextInput
          style={styles.textInput}
          value={userName}
          placeholder="usuario"
          onChangeText={setUserName}
        />
        <Text>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            value={password}
            placeholder="contraseña"
            secureTextEntry={!isPasswordVisible}
            onChangeText={setPassword}
          />
          <Pressable onPress={togglePasswordVisibility}>
            <Text style={styles.showHideText}>
              {isPasswordVisible ? "Ocultar" : "Mostrar"}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.viewPressable}>
        <Pressable>
          <Text>Olvidaste la contraseña</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Formulario de registro")}
        >
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={handleLogin}>
          <Text style={styles.text}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    //justifyContent: 'space-between',
    alignItems: "center",
    width: "100%",
  },
  showHideText: {
    color: "#4c65cc",
    paddingRight: 10,
  },
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
    flexDirection: "column",
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
    marginTop: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default Login;
