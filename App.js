import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import { useFonts } from "expo-font";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import FeaturedProduct from "./components/FeaturedProduct";
import Closure from "./components/Closure";
import Review from "./components/Review";

export default function App() {
  return (
    <View style={{ backgroundColor: "#E5E5E5", width: "100%" }}>
      <View style={styles.view}>
        <NavBar />
        <Hero />
        <View style={styles.positionStyle}>
          <Services />
          <Features />
          <FeaturedProduct />
          <Closure />
          <Review />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginHorizontal: "auto",
    padding: 0,
  },
  positionStyle: {
    top: "100%",
    left: 0,
    right: 0,
    position: "absolute",
  },
});
