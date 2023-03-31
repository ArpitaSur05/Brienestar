import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <View style={styles.view}>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "80%",
    marginHorizontal: "auto",
    padding: 0,
  },
});
