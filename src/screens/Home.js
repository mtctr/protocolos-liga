import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Constants from "expo-constants";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>

      {/* <Button
        title="Detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      /> */}
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
