import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/pages/MainScreen';
import MainRoutes from './src/routes/MainRoutes';

export default function App() {
  return (
    <MainRoutes/>
  );
}

