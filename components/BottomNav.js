import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";
export default function BottomNav() {
  return (
    <View style={styles.container}>
      <View style={styles.iconList}>
        <Image
          source={require("/assets/twitter-icon.svg")}
          style={styles.iconStyle}
        />
        <Image
          source={require("/assets/instagram-icon.svg")}
          style={styles.iconStyle}
        />
        <Image
          source={require("/assets/fb-icon.svg")}
          style={styles.iconStyle}
        />
      </View>
      <AppText style={styles.navFont}>
        Copyright Bienestar 2022 - Terms and Conditions Privacy Policy
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    paddingLeft: 30,
    height: 45,
    width: 45,
  },
  iconList: {
    flexDirection: "row",
    gap: 50,
  },
  container: {
    flexDirection: "row",
    height: 62,
    alignItems: "center",
    gap: 150,
  },
  navFont: {
    fontFamily: "opensans_semibold",
    fontSize: 22,
    opacity: "100%",
  },
});
