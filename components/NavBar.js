import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";
import App from "../App";

export default function NavBar() {
  const [fontsLoaded] = useFonts({
    sacramento: require("/assets/fonts/Sacramento-Regular.ttf"),
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
    opensans_bold: require("/assets/fonts/OpenSans-Bold.ttf"),
  });
  return (
    <View style={styles.nav}>
      <View style={styles.navMenu}>
        <Text style={styles.logo}>Bienestar</Text>

        <AppText style={styles.selectedMenu}>Home</AppText>
        <AppText>About</AppText>
        <AppText>Products</AppText>
        <AppText>Contact</AppText>
      </View>
      <View style={styles.dropdown}>
        <AppText style={{ opacity: "100%" }}>EN</AppText>
        <Image
          source={require("/assets/down-arrow.svg")}
          style={styles.arrow}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <AppText style={styles.buttonText}>Book an appointment</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "auto",
    gap: 70,
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: { fontFamily: "sacramento", fontSize: 30 },
  navMenu: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 70,
    alignItems: "center",
  },
  arrow: { width: 5, height: 5 },
  dropdown: { flexDirection: "row", alignItems: "center", gap: 5 },
  selectedMenu: { opacity: "100%" },
  buttonText: {
    color: "#954F25",
    fontFamily: "opensans_bold",
    opacity: "100%",
  },
  button: {
    borderRadius: 10,
    borderColor: "#954F25",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
