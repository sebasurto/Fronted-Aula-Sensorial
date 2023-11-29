import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function Tac_Sys_Buttons ({navigation}) {
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
            <View style={styles.frame2}>
              <Pressable style={styles.rectangle3} />
              <Pressable style={styles.rectangle3} />
              <Pressable style={styles.rectangle3} />
            </View>
          </View>
        </View>
      );
    
};

const styles = StyleSheet.create({
      div: {
        backgroundColor: '#ffffff',
        //borderColor: '#000000',
        //borderWidth: 1,
        //height: 640,
        //position: 'relative',
        //width: 360,
      },
      frame: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        //left: 48,
        position: 'relative',
        top: 276,
        
      },
      container: {
        alignItems: 'center',
        justifyContent: 'center',
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

export default Tac_Sys_Buttons;