import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";
export default function () {
  const [fontsLoaded] = useFonts({
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
    opensans_bold: require("/assets/fonts/OpenSans-Bold.ttf"),
  });
  return (
    <View style={styles.hero}>
      <View style={styles.message}>
        <AppText style={styles.header}>
          The essence of wellness and vitality in one place
        </AppText>
        <View style={styles.bulletList}>
          <View style={styles.listItem}>
            <Image
              source={require("/assets/bullet.svg")}
              style={styles.bullet}
            />
            <AppText style={{ fontSize: 16 }}>
              Aromatherapeutic massages
            </AppText>
          </View>
          <View style={styles.listItem}>
            <Image
              source={require("/assets/bullet.svg")}
              style={styles.bullet}
            />
            <AppText style={{ fontSize: 16 }}>
              Relaxation baths with the use of aromatherapy
            </AppText>
          </View>
          <View style={styles.listItem}>
            <Image
              source={require("/assets/bullet.svg")}
              style={styles.bullet}
            />
            <AppText style={{ fontSize: 16 }}>
              SPA & wellness treatments
            </AppText>
          </View>

          <TouchableOpacity style={styles.button}>
            <AppText style={styles.buttonText}>Ready to relax?</AppText>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={require("/assets/main-img-preview.svg")}
          style={styles.mainImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "85%",
    flexDirection: "row",

    justifyContent: "space-between",
    paddingVertical: 20,
    position: "relative",
    marginHorizontal: "auto",
  },
  header: {
    fontSize: 45,
    opacity: "100%",
    fontFamily: "opensans_bold",
    lineHeight: 55,
  },
  message: {
    gap: 10,
    width: "45%",
    marginTop: 26,
    marginLeft: 30,
  },
  bulletList: {
    gap: 10,
  },
  mainImg: {
    height: 400,
    width: 400,
    borderRadius: 400 / 2,
    marginRight: 20,
  },
  bullet: {
    opacity: "100%",
    height: 30,
    width: 30,
  },
  listItem: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#954F25",
    width: "max-content",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    opacity: "100%",
  },
});
