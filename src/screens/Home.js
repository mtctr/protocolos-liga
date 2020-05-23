import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
});
