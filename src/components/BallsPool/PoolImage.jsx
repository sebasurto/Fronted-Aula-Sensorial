import React from "react";
import { View, StyleSheet, Image } from "react-native";
import styles from '../../styles/styles';

function PoolImage({ navigation }) {
  return (
    <View style={styles.containerCenter}>
      <Image
        source={require("../../images/pool.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}


export default PoolImage;
