import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";
import { Svg, Circle } from "react-native-svg";
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
          <View style={styles.quoteContainer}>
            <Image
              source={require("/assets/doubleQuote.svg")}
              style={styles.doubleQuote}
            />
          </View>

          <AppText style={styles.review1}>
            Their products are organic and make my skin feel so goooood.
          </AppText>
          <View style={styles.starContainer}>
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
          </View>
        </View>
        <View style={styles.reviewCard2}>
          <View style={styles.quoteContainer}>
            <Image
              source={require("/assets/doubleQuote.svg")}
              style={styles.doubleQuote}
            />
          </View>

          <AppText style={styles.review2}>
            For their quality, they are extremely affordable
          </AppText>
          <View style={styles.starContainer}>
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
          </View>
        </View>
        <View style={styles.reviewCard3}>
          <View style={styles.quoteContainer}>
            <Image
              source={require("/assets/doubleQuote.svg")}
              style={styles.doubleQuote}
            />
          </View>

          <AppText style={styles.review3}>
            The staff are very friendly and the environment is comfortable.
          </AppText>
          <View style={styles.starContainer}>
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
            <Image
              source={require("/assets/star-img.svg")}
              style={styles.starStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.sliders}>
        <Image
          source={require("/assets/circle.svg")}
          style={styles.circleStyle1}
        />
        <Image
          source={require("/assets/circle.svg")}
          style={styles.circleStyle2}
        />
        <Svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
        </Svg>
      </View>
      <View style={styles.reviewBottom}>
        <AppText style={styles.note}>
          Bienestar - We provide beauty and treatment products and services with
          the <AppText style={styles.boldText}>best quality</AppText> at
          affordable prices
        </AppText>

        <TouchableOpacity style={styles.button}>
          <AppText style={styles.buttonText}>GET STARTED</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: "opensans_semibold",

    fontSize: 26,
    opacity: "100%",
  },
  boldText: {
    fontFamily: "opensans_bold",
    opacity: "100%",
  },
  reviewBottom: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 50,
  },
  button: {
    backgroundColor: "#954F25",
    paddingVertical: 5,
    paddingHorizontal: 60,
    borderRadius: 10,

    justifyContent: "center",
  },
  note: {
    fontFamily: "opensans_regular",
    opacity: "100%",
    fontSize: 26,
  },
  container: {
    marginBottom: 20,
    backgroundColor: "white",
    width: "85%",
    marginHorizontal: "auto",
  },
  starContainer: {
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  starStyle: {
    width: 30,
    height: 30,
  },
  quoteContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 26,
  },
  doubleQuote: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  reviewBar: {
    marginHorizontal: "auto",
    flexDirection: "row",
    width: "90%",
    gap: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewCard1: {
    backgroundColor: "rgba(149, 79, 37, 0.9)",
    height: 300,
    justifyContent: "center",
    borderRadius: 10,
    width: 210,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: "auto",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
  },
  reviewCard2: {
    backgroundColor: "rgba(149, 79, 37, 0.9)",
    justifyContent: "center",
    borderRadius: 10,
    width: 256,
    justifyContent: "flex-end",
    paddingBottom: 15,
    paddingHorizontal: 20,
    marginHorizontal: "auto",
    height: 360,
  },
  review1: {
    color: "white",
    fontSize: 16,
    opacity: 0.7,
    fontFamily: "opensans_semibold",
    textAlign: "center",
    lineHeight: 26,
    paddingVertical: 30,
    flex: 1,
    marginHorizontal: "auto",
  },
  review2: {
    color: "white",
    fontSize: 20,
    opacity: 0.7,
    fontFamily: "opensans_semibold",
    paddingVertical: 20,
    flex: 1,
    textAlign: "center",
    lineHeight: 30,
  },
  reviewCard3: {
    backgroundColor: "rgba(149, 79, 37, 0.9)",
    height: 300,
    justifyContent: "center",
    borderRadius: 10,
    width: 210,
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginHorizontal: "auto",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
  },
  review3: {
    color: "white",
    fontSize: 16,
    opacity: 0.7,
    fontFamily: "opensans_semibold",
    textAlign: "center",
    lineHeight: 26,
    paddingVertical: 30,
    flex: 1,
    marginHorizontal: "auto",
  },
  circleStyle1: {
    width: 17,
    height: 17,
  },
  circleStyle2: {
    width: 17,
    height: 17,
    opacity: 0.5,
  },

  sliders: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    gap: 10,
  },
});
