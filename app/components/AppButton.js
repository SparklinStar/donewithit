import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.appbutton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appbutton: {
    width: "50%",
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 35,
  },
  text: {
    fontSize: 30,
    color: colors.white,
    textAlign: "center",
    padding: 10,
  },
});
export default AppButton;
