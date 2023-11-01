import  React from "react";
import AudiovisualSystem from "../pages/AudiovisualSystem";
import BallsPool from "../pages/BallsPool";
import BubbleRoom from "../pages/BubbleRoom";
import CommonIlumination from "../pages/CommonIlumination";
import TactileSystem from "../pages/TactileSystem";
import TubeRoom from "../pages/TubeRoom";
import MainScreen from "../pages/MainScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function MainRoutes () {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="AudiovisualSystem" component={AudiovisualSystem } />
      <Stack.Screen name="BallsPool" component={BallsPool } />
      <Stack.Screen name="BubbleRoom" component={BubbleRoom } />
      <Stack.Screen name="CommonIlumination" component={CommonIlumination } />
      <Stack.Screen name="TactileSystem" component={TactileSystem } />
      <Stack.Screen name='TubeRoom' component={TubeRoom } />
      <Stack.Screen name='Main' component={MainScreen } />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default MainRoutes;