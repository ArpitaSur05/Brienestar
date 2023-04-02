import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import { useFonts } from "expo-font";
import Hero from "./components/Hero";

export default function App() {
  return (
    <View style={{ backgroundColor: "#E5E5E5", width: "100%" }}>
      <View style={styles.view}>
        <NavBar />
        <Hero />
      </View>
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
