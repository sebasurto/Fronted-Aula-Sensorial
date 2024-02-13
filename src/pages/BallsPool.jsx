import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import Pool_Image from "../components/BallsPool/PoolImage";
import { apiUrl } from "../../apiUrl";

const COLORS = {
  BLUE: {
    backgroundColor: "#4988E7",
    borderColor: "#427AD0",
  },
  RED: {
    backgroundColor: "#E73C3C",
    borderColor: "#D03636",
  },
  GREEN: {
    backgroundColor: "#81E533",
    borderColor: "#74CE2E",
  },
  WHITE: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E5E5",
  },
};

function BallsPool({ navigation }) {
  const identifier = "piscinadepelotas";

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); // Estado inicial de color de fondo

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${apiUrl}/device/identifier/${identifier}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setBackgroundColor(data.details.color);
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Error al conectar al servidor");
      });

    return () => {
      controller.abort();
    };
  }, []);

  async function sendDeviceInfo(colorSelected) {
    fetch(`${apiUrl}/device/identifier/${identifier}/details`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song: "None",
        volumeLevel: 0,
        color: colorSelected,
        intensity: 0,
        video: "None",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBackgroundColor((prev) => colorSelected);
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Error al conectar al servidor");
      });
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Pool_Image />
      <View style={styles.button_container}>
        <Pressable
          style={[
            styles.circle,
            styles.centerButton,
            {
              backgroundColor: COLORS.BLUE.backgroundColor,
              borderColor: COLORS.BLUE.borderColor,
            },
          ]}
          onPress={() => {
            sendDeviceInfo(COLORS.BLUE.backgroundColor);
          }}
        />
        <Pressable
          style={[
            styles.circle,
            {
              backgroundColor: COLORS.RED.backgroundColor,
              borderColor: COLORS.RED.borderColor,
            },
          ]}
          onPress={() => {
            sendDeviceInfo(COLORS.RED.backgroundColor);
          }}
        />
        <Pressable
          style={[
            styles.circle,
            {
              backgroundColor: COLORS.GREEN.backgroundColor,
              borderColor: COLORS.GREEN.borderColor,
            },
          ]}
          onPress={() => {
            sendDeviceInfo(COLORS.GREEN.backgroundColor);
          }}
        />
        <Pressable
          style={[
            styles.circle,
            styles.centerButton,
            {
              backgroundColor: COLORS.WHITE.backgroundColor,
              borderColor: COLORS.WHITE.borderColor,
            },
          ]}
          onPress={() => {
            sendDeviceInfo(COLORS.WHITE.backgroundColor);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button_container: {
    width: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    margin: 10,
    borderWidth: 10,
    borderStyle: "solid",
  },
});

export default BallsPool;
