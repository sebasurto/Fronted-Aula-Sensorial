import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Pool_Buttons from "../components/Pool_Buttons";
import Power_Button from "../components/Power_Button";
import Pool_Image from "../components/Pool_Image";
function BallsPool({ navigation }) {
  return (
    <ScrollView>
      {/* <Power_Button/> */}
      <Pool_Image />
      <Pool_Buttons />
    </ScrollView>
  );
}

export default BallsPool;
