import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";
import FloatingProductCard from "./FloatingProductCard";

export default function FeaturedProduct() {
  const [fontsLoaded] = useFonts({
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
    opensans_bold: require("/assets/fonts/OpenSans-Bold.ttf"),
    opensans_regular: require("/assets/fonts/OpenSans-Regular.ttf"),
    opensans_bolditalic: require("/assets/fonts/OpenSans-BoldItalic.ttf"),
  });
  return (
    <View style={styles.container}>
      <AppText style={styles.featureHeading}>PRODUCT</AppText>

      <AppText style={styles.featureDescription}>
        Our bestseller this week...
      </AppText>
      <FloatingProductCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
    // marginHorizontal: "auto",
    alignItems: "center",
    padding: 0,
    paddingBottom: 220,
    marginBottom: 400,
    position: "relative",
  },

  featureHeading: {
    color: "#954F25",
    fontFamily: "opensans_semibold",
    fontSize: 32,
    opacity: "100%",
    paddingTop: 30,
    paddingBottom: 10,
  },
  featureDescription: {
    color: "black",
    fontFamily: "opensans_bolditalic",
    fontSize: 42,
    opacity: "100%",
    paddingBottom: 40,
  },
});
