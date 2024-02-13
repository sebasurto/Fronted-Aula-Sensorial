import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import Slider from "@react-native-community/slider";
import { apiUrl } from "../../apiUrl";

const COLORS = {
  YELLOW: {
    backgroundColor: "#ffd600",
    borderColor: "#CEAE00",
  },
  GREEN: {
    backgroundColor: "#81E533",
    borderColor: "#74CE2E",
  },
  BLUE: {
    backgroundColor: "#4988E7",
    borderColor: "#427AD0",
  },
  RED: {
    backgroundColor: "#E73C3C",
    borderColor: "#D03636",
  },
  WHITE: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
  },
  PURPLE: {
    backgroundColor: "#A131E5",
    borderColor: "#8328B9",
  },
};

function CommonIlumination({ navigation }) {
  const identifier = "iluminaciongeneral";

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [sliderValue, setSliderValue] = useState(0.0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${apiUrl}/device/identifier/${identifier}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setBackgroundColor(data.details.color);
        setSliderValue(data.details.intensity);
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Error al conectar al servidor");
      });

    return () => {
      controller.abort();
    };
  }, []);

  async function sendDeviceInfo(colorSelected, sliderSelected) {
    fetch(`${apiUrl}/device/identifier/${identifier}/details`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song: "None",
        volumeLevel: 0,
        color: colorSelected,
        intensity: sliderSelected,
        video: "None",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBackgroundColor((prev) => colorSelected);
        setSliderValue((prev) => sliderSelected);
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Error al conectar al servidor");
      });
  }

  return (
    <ScrollView style={[styles.mainView, { backgroundColor }]}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          onValueChange={(value) => {
            sendDeviceInfo(backgroundColor, value);
          }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#ffd600"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#ffd600"
          value={sliderValue}
        />
      </View>
      <View>
        <Image
          source={require("../images/room.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.container}>
        <View style={styles.frame}>
          <View style={styles.frame2}>
            <Pressable
              style={[
                styles.rectangle,
                {
                  backgroundColor: COLORS.YELLOW.backgroundColor,
                  borderColor: COLORS.YELLOW.borderColor,
                },
              ]}
              onPress={() =>
                sendDeviceInfo(COLORS.YELLOW.backgroundColor, sliderValue)
              }
            />
            <Pressable
              style={[
                styles.rectangle,
                {
                  backgroundColor: COLORS.GREEN.backgroundColor,
                  borderColor: COLORS.GREEN.borderColor,
                },
              ]}
              onPress={() =>
                sendDeviceInfo(COLORS.GREEN.backgroundColor, sliderValue)
              }
            />
            <Pressable
              style={[
                styles.rectangle,
                {
                  backgroundColor: COLORS.BLUE.backgroundColor,
                  borderColor: COLORS.BLUE.borderColor,
                },
              ]}
              onPress={() =>
                sendDeviceInfo(COLORS.BLUE.backgroundColor, sliderValue)
              }
            />
          </View>
          <View style={styles.frame2}>
            <Pressable
              style={[
                styles.rectangle,
                {
                  backgroundColor: COLORS.RED.backgroundColor,
                  borderColor: COLORS.RED.borderColor,
                },
              ]}
              onPress={() =>
                sendDeviceInfo(COLORS.RED.backgroundColor, sliderValue)
              }
            />
            <Pressable
              style={[
                styles.rectangle,
                {
                  backgroundColor: COLORS.WHITE.backgroundColor,
                  borderColor: COLORS.WHITE.borderColor,
                },
              ]}
              onPress={() =>
                sendDeviceInfo(COLORS.WHITE.backgroundColor, sliderValue)
              }
            />
            <Pressable
              style={[
                styles.rectangle,
                {
                  backgroundColor: COLORS.PURPLE.backgroundColor,
                  borderColor: COLORS.PURPLE.borderColor,
                },
              ]}
              onPress={() =>
                sendDeviceInfo(COLORS.PURPLE.backgroundColor, sliderValue)
              }
            />
          </View>
        </View>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
  },
  slider: {
    width: "100%",
    height: 20,
  },
  image: {
    width: 200,
    height: 200,
    position: "relative",
    alignSelf: "center",
    marginTop: 20,
  },
  mainView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  frame: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    justifyContent: "center",
    //left: 48,
    position: "relative",
  },
  frame2: {
    flexDirection: "row",
    alignItems: "flex-start",
    display: "flex",
    gap: 15,
    position: "relative",
  },
  rectangle: {
    width: 90,
    height: 90,
    borderRadius: 20,
    borderWidth: 5,
    borderStyle: "solid",
  },
});

export default CommonIlumination;
