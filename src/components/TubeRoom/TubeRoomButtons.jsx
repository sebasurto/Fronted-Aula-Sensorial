import React from "react";
import {  View, StyleSheet, Pressable } from "react-native";

function TubeRoomButtons ({}) {
    return (
        <View style={styles.container}>
          <View style={styles.frame}>
            <View style={styles.frame2}>
              <Pressable style={styles.rectangle} />
              <Pressable style={styles.rectangle} />
              <Pressable style={styles.rectangle} />
            </View>
            <View style={styles.frame2}>
              <Pressable style={styles.rectangle2} />
              <Pressable style={styles.rectangle2} />
              <Pressable style={styles.rectangle2} />
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
        marginTop: 50,
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
        borderRadius: 10,
        backgroundColor: 'rgba(89, 228, 24, 0.5)', // color verde
      },
      rectangle2: {
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: 'rgba(186, 18, 245, 0.5)', // color morado
      },
      rectangle3: {
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: 'rgba(242, 153, 20, 0.5)', // color naranja
      },
});

export default TubeRoomButtons;