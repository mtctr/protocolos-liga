import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Servico({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#e7674d",
    borderBottomWidth: 1,
    marginBottom: 5,
    alignItems: "flex-start",
  },
  textStyle: {
    color: "#692E23",
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 5,
  },
});
