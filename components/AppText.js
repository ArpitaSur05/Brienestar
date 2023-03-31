import { Text } from "react-native";
import { useFonts } from "expo-font";
const AppText = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    opensans_semibold: require("/assets/fonts/OpenSans-SemiBold.ttf"),
  });
  return (
    <Text style={{ fontFamily: "opensans_semibold", opacity: "50%", ...style }}>
      {children}
    </Text>
  );
};

export default AppText;
