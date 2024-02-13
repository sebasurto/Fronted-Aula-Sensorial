import React, { useEffect, useState } from "react";
import { ScrollView, Alert, StyleSheet, View, Text } from "react-native";
import TacSysButtons from "../components/TactileSystem/TacSysButtons";
import Slider from "@react-native-community/slider";
import { apiUrl } from "../../apiUrl";

function TactileSystem({ navigation }) {
  const identifier = "sistematactil";
  const [sliderValue, setSliderValue] = useState(0.0);

  const sliderColor = sliderValue > 0.5 ? "blue" : "lightblue";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${apiUrl}/device/identifier/${identifier}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setSliderValue(data.details.volumeLevel);
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Error al conectar al servidor");
      });

    return () => {
      controller.abort();
    };
  }, []);

  async function sendDeviceInfo(sliderSelected) {
    fetch(`${apiUrl}/device/identifier/${identifier}/details`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song: "None",
        volumeLevel: sliderSelected,
        color: "None",
        intensity: 0,
        video: "None",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSliderValue((prev) => sliderSelected);
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Error al conectar al servidor");
      });
  }

  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={(value) => {
            sendDeviceInfo(value);
          }}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Text style={styles.text}>Volumen: {Math.round(sliderValue)}%</Text>
      </View>
      <TacSysButtons />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: 300,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 20,
    padding: 24,
    backgroundColor: "#E6E6FA", // Color de fondo del contenedor del slider
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: "center",
    alignSelf: "center",
  },
  slider: {
    width: "100%",
    height: 50,
  },
  text: {
    alignContent: "center",
    fontSize: 20,
    color: "black",
    marginTop: 20,
  },
  mainView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  containerCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300, // Ajusta el ancho de la imagen según sea necesario
    height: 300, // Ajusta la altura de la imagen según sea necesario
    position: "relative",
    alignSelf: "center",
    marginTop: 20,
  },
});

export default TactileSystem;
