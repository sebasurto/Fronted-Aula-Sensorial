import React from "react";
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

const Stack = createNativeStackNavigator();
function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio de Sesión">
        <Stack.Screen name="Inicio de Sesión" component={Login} />
        <Stack.Screen name="Formulario de registro" component={RegisterScreen} />
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
          }}/>
        <Stack.Screen 
          name="Cuarto de tubos" 
          component={TubeRoom} 
          options={{
            headerRight: powerButton,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const powerButton = () => (
  <Pressable style={styles.power} onPress={() => {}}>
    <Ionicons name="power" size={25} color="#ffffff"></Ionicons>
  </Pressable>
);

const styles = StyleSheet.create({
  power: {
    justifyContent: "center",
    backgroundColor: "#4c65cc",
    padding: 5,
    borderRadius: 50,
  },
});

export default MainRoutes;
