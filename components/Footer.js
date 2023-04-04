import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppText from "./AppText";
export default function Footer() {
  const [fontsLoaded] = useFonts({
    sacramento: require("/assets/fonts/Sacramento-Regular.ttf"),
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
    opensans_bold: require("/assets/fonts/OpenSans-Bold.ttf"),
    opensans_regular: require("/assets/fonts/OpenSans-Regular.ttf"),
  });
  return (
    <View style={styles.footer}>
      <AppText style={styles.logo}>Bienestar</AppText>
      <View style={styles.lineStyle} />
      <View style={styles.footerContent}>
        <View style={styles.aboutSection}>
          <AppText style={styles.heading}>About</AppText>
          <AppText style={styles.rowItemStyle}>About us</AppText>
          <AppText style={styles.rowItemStyle}>Features</AppText>
          <AppText style={styles.rowItemStyle}>News</AppText>
          <AppText style={styles.rowItemStyle}>Careers</AppText>
        </View>

        <View style={styles.productSection}>
          <AppText style={styles.heading}>Product</AppText>
          <AppText style={styles.rowItemStyle}>New arrival</AppText>
          <AppText style={styles.rowItemStyle}>Discounts</AppText>
          <AppText style={styles.rowItemStyle}>Customize</AppText>
        </View>
        <View style={styles.companyDetails}>
          <AppText style={styles.heading}>Company</AppText>
          <AppText style={styles.rowItemStyle}>Our team</AppText>
          <AppText style={styles.rowItemStyle}>Partner with us</AppText>
          <AppText style={styles.rowItemStyle}>Blog</AppText>
          <AppText style={styles.rowItemStyle}>FAQs</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#E5E5E5",
    paddingBottom: 60,
  },
  logo: {
    fontFamily: "sacramento",
    fontSize: 50,
    opacity: "100%",
    textAlign: "center",
    paddingTop: 35,
    paddingBottom: 5,
    letterSpacing: 4,
  },
  lineStyle: {
    borderBottomWidth: 0.5,
    borderColor: "#954F25",
    width: "85%",
    marginHorizontal: "auto",
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  heading: {
    fontSize: 27,
    fontFamily: "opensans_semibold",
    opacity: "100%",
    paddingBottom: 20,
    paddingTop: 30,
  },
  rowItemStyle: {
    fontFamily: "opensans_regular",
    fontSize: 22,
    paddingVertical: 7,
    opacity: 0.5,
  },
});
