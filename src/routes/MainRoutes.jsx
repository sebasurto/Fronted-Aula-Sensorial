import React, { useEffect, useState } from "react";
import AudiovisualSystem from "../pages/AudiovisualSystem";
import BallsPool from "../pages/BallsPool";
import BubbleRoom from "../pages/BubbleRoom";
import CommonIlumination from "../pages/CommonIlumination";
import TactileSystem from "../pages/TactileSystem";
import TubeRoom from "../pages/TubeRoom";
import Login from "../pages/Login";
import MainScreen from "../pages/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import RegisterScreen from "../pages/RegisterScreen";
import { apiUrl } from "../../apiUrl";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio de Sesión">
        <Stack.Screen name="Inicio de Sesión" component={Login} />
        <Stack.Screen
          name="Formulario de registro"
          component={RegisterScreen}
        />
        <Stack.Screen name="Controlador central" component={MainScreen} />
        <Stack.Screen
          name="Sala audiovisual"
          component={AudiovisualSystem}
          options={{
            headerRight: powerButton,
          }}
        />
        <Stack.Screen
          name="Piscina de pelotas"
          component={BallsPool}
          options={{
            headerRight: powerButton,
          }}
        />
        <Stack.Screen
          name="Cuarto de burbujas"
          component={BubbleRoom}
          options={{
            headerRight: powerButton,
          }}
        />
        <Stack.Screen
          name="Iluminación general"
          component={CommonIlumination}
          options={{
            headerRight: powerButton,
          }}
        />
        <Stack.Screen
          name="Sistema táctil"
          component={TactileSystem}
          options={{
            headerRight: powerButton,
          }}
        />
        <Stack.Screen
          name="Cuarto de tubos"
          component={TubeRoom}
          options={{
            headerRight: powerButton,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function powerButton() {
  const [active, setActive] = useState(true);

  return (
    <Pressable
      style={[styles.power, active ? styles.powerOn : styles.powerOff]}
      onPress={() => {
        setActive((prev) => !prev);
      }}
    >
      <Ionicons name="power" size={25} color="#ffffff"></Ionicons>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  power: {
    justifyContent: "center",
    padding: 5,
    borderRadius: 50,
  },
  powerOff: {
    backgroundColor: "#81E533",
  },
  powerOn: {
    backgroundColor: "#E73C3C",
  },
});

export default MainRoutes;
