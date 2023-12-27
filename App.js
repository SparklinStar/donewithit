import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
} from "react-native";

export default function App() {
  //console.log(Dimensions.get("screen")); //Not get updated when orientation changes
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "lightgreen",
          height: 100,
          width: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "blue",
          height: 100,
          width: 100,
          right: 120,
          bottom: 120,
        }}
      ></View>
      <View
        style={{ backgroundColor: "orange", height: 100, width: 100 }}
      ></View>
      <View
        style={{ backgroundColor: "black", height: 100, width: 100 }}
      ></View>
      <View style={{ backgroundColor: "grey", height: 100, width: 100 }}></View>
    </View>
  );
}

const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
