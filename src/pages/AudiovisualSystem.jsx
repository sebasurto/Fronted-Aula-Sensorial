import React, { useEffect, useState, useRef } from "react";
import { View, Text, Pressable, StyleSheet, Image, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as DocumentPicker from "expo-document-picker";
import { apiUrl } from "../../apiUrl";

import { Video, ResizeMode } from "expo-av";

const PlaceholderImage = require("../images/tv.png");

function AudiovisualSystem({ navigation }) {
  const identifier = "salaaudiovisual";
  const [volume, setVolume] = useState(0.0);

  const video = useRef(null);
  const [status, setStatus] = useState({});

  const [fileUri, setFileUri] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${apiUrl}/device/identifier/${identifier}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setVolume(data.details.volumeLevel);
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Error al conectar al servidor");
      });

    return () => {
      controller.abort();
    };
  }, []);

  async function sendDeviceInfo(newVolume) {
    fetch(`${apiUrl}/device/identifier/${identifier}/details`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song: "None",
        volumeLevel: newVolume,
        color: "None",
        intensity: 0,
        video: "None",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setVolume((prev) => newVolume);
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Error al conectar al servidor");
      });
  }

  async function uploadVideo() {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({
        type: "video/*",
      });

      const formData = new FormData();
      const file = docRes.assets[0];

      setFileUri((prev) => file.uri);

      const videoFile = {
        name: file.name.split(".")[0],
        uri: file.uri,
        type: file.mimeType,
        size: file.size,
      };

      formData.append("file", videoFile);

      fetch(`${apiUrl}/file/uploadFile`, {
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          Alert.alert(
            "Error",
            error.message || "Error al conectar al servidor"
          );
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.firstView}>
      {fileUri == "" && (
        <Image
          source={PlaceholderImage}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      {fileUri != "" && (
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: fileUri,
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      )}
      <View style={styles.secondView}>
        <View style={styles.volumeView}>
          <Pressable
            style={styles.volumeUp}
            onPress={() => {
              sendDeviceInfo(volume + 10);
            }}
          >
            <Ionicons name="add" size={30} color="#ffffff"></Ionicons>
          </Pressable>
          <Pressable
            style={styles.volumeDown}
            onPress={() => {
              sendDeviceInfo(volume - 10);
            }}
          >
            <Ionicons name="remove" size={30} color="#ffffff"></Ionicons>
          </Pressable>
        </View>
        <View style={styles.buttonsView}>
          <Pressable
            style={styles.volumeMute}
            onPress={() => {
              sendDeviceInfo(0);
            }}
          >
            <Ionicons name="volume-mute" size={30} color="#ffffff"></Ionicons>
          </Pressable>
          <Pressable style={styles.uploadFile} onPress={uploadVideo}>
            <Ionicons name="arrow-up" size={30} color="#ffffff"></Ionicons>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  secondView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  volumeUp: {
    backgroundColor: "#4c65cc",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  volumeDown: {
    backgroundColor: "#4c65cc",
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  volumeMute: {
    backgroundColor: "#4c65cc",
    padding: 30,
    borderRadius: 30,
  },
  uploadFile: {
    backgroundColor: "#4c65cc",
    padding: 30,
    borderRadius: 30,
  },

  text: {
    color: "#ffffff",
    fontSize: 16,
  },
  volumeView: {
    flexDirection: "column",
    borderRadius: 30,
  },
  buttonsView: {
    gap: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});

export default AudiovisualSystem;
