import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import { useFonts } from "expo-font";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <View style={{ backgroundColor: "#E5E5E5", width: "100%" }}>
      <View style={styles.view}>
        <NavBar />
        <Hero />
        <Services />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "90%",
    marginHorizontal: "auto",
    padding: 0,
  },
});
