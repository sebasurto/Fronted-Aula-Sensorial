import React from "react";
import AudiovisualSystem from "../pages/AudiovisualSystem";
import BallsPool from "../pages/BallsPool";
import BubbleRoom from "../pages/BubbleRoom";
import CommonIlumination from "../pages/CommonIlumination";
import TactileSystem from "../pages/TactileSystem";
import TubeRoom from "../pages/TubeRoom";
import MainScreen from "../pages/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
const Stack = createNativeStackNavigator();
function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="AudiovisualSystem"
          component={AudiovisualSystem}
          options={{
            title: "Sistema Audiovisual",
          }}
        />
        <Stack.Screen
          name="BallsPool"
          component={BallsPool}
          options={{
            title: "Piscina de Pelotas",
          }}
        />
        <Stack.Screen
          name="BubbleRoom"
          component={BubbleRoom}
          options={{
            title: "Cuarto de Burbujas",
          }}
        />
        <Stack.Screen
          name="CommonIlumination"
          component={CommonIlumination}
          options={{
            title: "Iluminación General",
          }}
        />
        <Stack.Screen
          name="TactileSystem"
          component={TactileSystem}
          options={{
            title: "Sistema Táctil",
          }}
        />
        <Stack.Screen
          name="TubeRoom"
          component={TubeRoom}
          options={{
            title: "Cuarto de Tubos",
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: "Controlador Central",
            headerLeft: () => (
              <Icon
                name="home-outline" // Nombre del ícono
                size={20} // Tamaño del ícono
                color="black" // Color del ícono
                style={{ marginLeft: "2vh" }} // Estilos adicionales
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainRoutes;
