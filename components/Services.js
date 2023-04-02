import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";
export default function Services() {
  const [fontsLoaded] = useFonts({
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
  });
  return (
    <View style={styles.card}>
      <View style={styles.serviceDetail}>
        <Image
          source={require("/assets/service-1.png")}
          style={styles.serviceImg}
        />
        <AppText style={styles.serviceName}>Facial & Therapy</AppText>
      </View>
      <View style={styles.serviceDetail}>
        <Image
          source={require("/assets/service-2.png")}
          style={styles.serviceImg}
        />
        <AppText style={styles.serviceName}>Body Treatment</AppText>
      </View>
      <View style={styles.serviceDetail}>
        <Image
          source={require("/assets/service-3.jpg")}
          style={styles.serviceImg}
        />
        <AppText style={styles.serviceName}>Sauna Skin</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    boxShadow:
      "-3px 6px 15px rgba(0, 0, 0, 0.1), 3px 0px 0px rgba(0, 0, 0, 0.1)",
    paddingHorizontal: 50,
    paddingVertical: 34,

    marginHorizontal: "auto",
    width: "85%",
    marginBottom: 106,
  },
  serviceImg: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
  },

  serviceName: {
    fontFamily: "opensans_semibold",
    fontSize: 25,
    color: "black",
    textAlign: "center",
    opacity: "100%",
    paddingTop: 40,
  },
});
