import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#ffffff'
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

export default styles;
