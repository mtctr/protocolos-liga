import { StyleSheet } from "react-native";
import Constants from "expo-constants";
export default function CommonStyles() {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#eaeaea",
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20,
    },
  });

  return styles;
}
