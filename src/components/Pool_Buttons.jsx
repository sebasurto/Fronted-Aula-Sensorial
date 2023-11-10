import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function Pool_Buttons({ navigation }) {
        return (
          <View style={styles.container}>
            <View style={styles.row}>
              <Pressable style={[styles.circle, styles.centerButton, { backgroundColor: 'blue' }]} />
            </View>
            <View style={styles.row}>
              <Pressable style={[styles.circle, { backgroundColor: 'red' }]} />
              <Pressable style={[styles.circle, { backgroundColor: 'green' }]} />
            </View>
            <View style={styles.row}>
              <Pressable style={[styles.circle, styles.centerButton, { backgroundColor: 'yellow' }]} />
            </View>
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
        marginTop: 0, 
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        row: {
          marginTop:0,
          marginBottom: 0,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        circle: {
          width: 120,
          height: 120,
          borderRadius: 100,
          margin: 10,
        },
        centerButton: {
          justifyContent: 'center',
        },
      });
    
export default  Pool_Buttons;

