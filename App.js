import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AntDesign name="clockcircle" size={200} color="black" />
      <AppText>Hello, world!</AppText>
      <Text>Open up App.js to start working on your app! Before New Year</Text>
      <AntDesign name="clockcircle" size={24} color="black" />
      <AppButton title="Login" onPress={() => console.log("tapped")} />
    </View>
  );
}
