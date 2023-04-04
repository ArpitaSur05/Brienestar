import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";

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

      <View style={styles.featuredProductDetails}>
        <View style={styles.productDetail}>
          <AppText style={styles.productHeading}>Daily Serum</AppText>
          <AppText style={styles.productDescription}>
            Bakuchiol is a natural alternative to Retinol, which is safe and
            gentle to use on sensitive skin by all, including teenagers and
            pregnant women.
          </AppText>
        </View>

        <Image
          source={require("/assets/featured-product-img.png")}
          style={styles.productImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
    // marginHorizontal: "auto",
    alignItems: "center",
    marginBottom: 40,
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
    paddingBottom: 50,
  },
  productImg: {
    width: 250,
    height: 420,
  },
  featuredProductDetails: {
    flexDirection: "row",
    height: "30%",
    width: "70%",
    marginHorizontal: "auto",
    borderRadius: 15,
    overflow: "hidden",
  },
  productDetail: {
    backgroundColor: "#954F25",
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 50,
    marginHorizontal: "auto",
  },
  productHeading: {
    color: "white",
    opacity: "100%",
    fontSize: 38,
    fontFamily: "opensans_bold",
    marginBottom: 35,
  },
  productDescription: {
    color: "white",
    opacity: "60%",
    fontSize: 30,
    fontFamily: "opensans_semibold",
    paddingBottom: 40,
  },
});
