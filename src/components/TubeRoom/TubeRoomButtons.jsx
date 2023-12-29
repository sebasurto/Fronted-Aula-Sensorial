import React from "react";
import {  View, StyleSheet, Pressable } from "react-native";

const COLORS = {
  YELLOW: {
    backgroundColor: '#ffd600',
    borderColor: '#CEAE00',
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
    backgroundColor: '#A131E5',
    borderColor: '#8328B9',
  },
    
  };

const ColorButton = ({ colorStyle }) => (
    <Pressable style={[styles.rectangle, colorStyle]}/>
  );

function TubeRoomButtons ({}) {
  const colorKeys = Object.keys(COLORS);
    return (
      <View style={styles.container}>
        <View style={styles.frame}>
          <View style={styles.frame2}>
            {colorKeys.slice(0, 3).map((key) => (
              <ColorButton key={key} colorStyle={COLORS[key]} />
            ))}
          </View>
          <View style={styles.frame2}>
            {colorKeys.slice(3, 6).map((key) => (
              <ColorButton key={key} colorStyle={COLORS[key]} />
            ))}
          </View>
        </View>
      </View>
      );
    
};

const styles = StyleSheet.create({
      frame: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        //left: 48,
        position: 'relative',
        
      },
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      },
      frame2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        display: 'flex',
        gap: 15,
        position: 'relative',
      },
      rectangle: {
        width: 90,
        height: 90,
        borderRadius: 20,
        borderWidth: 5,
        borderStyle: "solid",
      },

});

export default TubeRoomButtons;