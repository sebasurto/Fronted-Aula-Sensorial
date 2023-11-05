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
const Stack = createNativeStackNavigator();
function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio de Sesión">
        <Stack.Screen name="Inicio de Sesión" component={Login} />
        <Stack.Screen name="Controlador central" component={MainScreen} />
        <Stack.Screen name="Sala audiovisual" component={AudiovisualSystem} />
        <Stack.Screen name="Piscina de pelotas" component={BallsPool} />
        <Stack.Screen name="Cuarto de burbujas" component={BubbleRoom} />
        <Stack.Screen
          name="Iluminación general"
          component={CommonIlumination}
        />
        <Stack.Screen name="Sistema táctil" component={TactileSystem} />
        <Stack.Screen name="Cuarto de tubos" component={TubeRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainRoutes;
