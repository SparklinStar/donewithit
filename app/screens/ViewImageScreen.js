import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeicon}></View>
      <View style={styles.deleteicon}></View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeicon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteicon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
