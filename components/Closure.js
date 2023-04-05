import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";

export default function Closure() {
  const [fontsLoaded] = useFonts({
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
    opensans_bold: require("/assets/fonts/OpenSans-Bold.ttf"),
    opensans_regular: require("/assets/fonts/OpenSans-Regular.ttf"),
    opensans_bolditalic: require("/assets/fonts/OpenSans-BoldItalic.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("/assets/img-1.png")} style={styles.imgStyle} />
        <Image source={require("/assets/img-2.png")} style={styles.imgStyle} />
        <Image source={require("/assets/img-3.png")} style={styles.imgStyle} />
        <Image source={require("/assets/img-4.png")} style={styles.imgStyle} />
        <Image source={require("/assets/img-5.png")} style={styles.imgStyle} />
      </View>

      <AppText style={styles.h2}>
        Book an appointment to get all the amazing services we provide
      </AppText>
      <AppText style={styles.paragraph}>
        Follow us to get more attractive vouchers. We update events every Friday
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    paddingTop: 120,
    marginTop: -60,
    paddingHorizontal: 60,
    marginHorizontal: "auto",
    marginBottom: 60,
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgStyle: {
    width: 200,
    height: 130,
  },
  h2: {
    fontSize: 48,
    fontFamily: "opensans_semibold",
    opacity: "100%",
    textAlign: "center",
    width: "60%",
    marginHorizontal: "auto",
    paddingTop: 60,
  },
  paragraph: {
    textAlign: "center",
    fontFamily: "opensans_regular",
    fontSize: 29,
    width: "50%",
    marginHorizontal: "auto",
    paddingTop: 30,
    paddingBottom: 60,
  },
});
