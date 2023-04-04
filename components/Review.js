import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";
export default function Review() {
  const [fontsLoaded] = useFonts({
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
    opensans_bold: require("/assets/fonts/OpenSans-Bold.ttf"),
    opensans_regular: require("/assets/fonts/OpenSans-Regular.ttf"),
    opensans_bolditalic: require("/assets/fonts/OpenSans-BoldItalic.ttf"),
    parisienne_regular: require("/assets/fonts/Parisienne-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.reviewBar}>
        <View style={styles.reviewCard1}>
          <Image
            source={require("/assets/doubleQuote.svg")}
            style={styles.doubleQuote}
          />

          <AppText style={styles.review1}>
            Their products are organic and make my skin feel so goooood.
          </AppText>
        </View>
        <View style={styles.reviewCard2}>
          <AppText style={styles.review2}>
            For their quality, they are extremely affordable
          </AppText>
        </View>
        <View style={styles.reviewCard1}>
          <AppText style={styles.review1}>
            The staff are very friendly and the environment is comfortable.
          </AppText>
        </View>
        <View style={styles.sliders}></View>
      </View>
      <View style={styles.reviewBottom}>
        <View style={styles.summary}></View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 120,
    backgroundColor: "white",
  },

  doubleQuote: {
    width: 50,
    height: 50,
    margin: "0 auto",
  },
  reviewBar: {
    marginHorizontal: "auto",
    flexDirection: "row",
    gap: 100,
  },
  reviewCard1: {
    backgroundColor: "rgba(149, 79, 37, 0.9)",
    height: 270,
    justifyContent: "center",
    borderRadius: 10,
    width: "max-width",
    justifyContent: "flex-end",
    marginHorizontal: "auto",
  },
  reviewCard2: {
    backgroundColor: "rgba(149, 79, 37, 0.9)",

    height: 300,
  },
  review1: {
    color: "white",
    fontSize: 15,
    opacity: "0.7",
    fontFamily: "opensans_semibold",
    width: 180,
    textAlign: "center",
  },
  review2: {
    color: "white",
    fontSize: 15,
    opacity: "0.7",
    fontFamily: "opensans_semibold",
    width: 180,
  },
});
