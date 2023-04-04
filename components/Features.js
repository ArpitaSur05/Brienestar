import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";

export default function Features() {
  const [fontsLoaded] = useFonts({
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
    opensans_bold: require("/assets/fonts/OpenSans-Bold.ttf"),
    opensans_regular: require("/assets/fonts/OpenSans-Regular.ttf"),
  });
  return (
    <View>
      <AppText style={styles.headingStyle}>Why choose us</AppText>
      <View style={styles.featureImg}>
        <View style={styles.featureContent}>
          <Image
            source={require("/assets/location.svg")}
            style={styles.iconStyle}
          />

          <AppText style={styles.featureHeading}>Easy access</AppText>
          <AppText style={styles.featureDescription}>
            Find our locations with ease
          </AppText>
        </View>
        <View style={styles.featureContent}>
          <Image
            source={require("/assets/lock.svg")}
            style={styles.iconStyle}
          />

          <AppText style={styles.featureHeading}>Secure</AppText>
          <AppText style={styles.featureDescription}>
            Personal self lock wardrobe
          </AppText>
        </View>
        <View style={styles.featureContent}>
          <Image
            source={require("/assets/food.svg")}
            style={styles.iconStyle}
          />

          <AppText style={styles.featureHeading}>Free drink</AppText>
          <AppText style={styles.featureDescription}>
            A mini bar to get 1 free drink
          </AppText>
        </View>
        <View style={styles.featureContent}>
          <Image
            source={require("/assets/book-app.svg")}
            style={styles.iconStyle}
          />

          <AppText style={styles.featureHeading}>Fast booking</AppText>
          <AppText style={styles.featureDescription}>
            Make an appointment easy and quickly
          </AppText>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  featureImg: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 80,

    marginBottom: 200,
  },
  iconStyle: {
    width: 90,
    height: 90,
  },
  headingStyle: {
    color: "black",
    opacity: "100%",
    fontSize: 34,
    fontFamily: "opensans_bold",
    textAlign: "center",
  },
  featureContent: {
    alignItems: "center",
    width: "20%",
  },
  featureHeading: {
    fontSize: 30,
    color: "black",
    opacity: "100%",
    fontFamily: "opensans_semibold",
    textAlign: "center",
    paddingTop: 35,
    paddingBottom: 20,
  },
  featureDescription: {
    fontSize: 23,
    fontFamily: "opensans_regular",
    textAlign: "center",
  },
});
