import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Topico({ children }) {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <FontAwesome5 name="book-medical" size={40} color="#692E23" />
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "#692E23",
    fontSize: 13,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
    textTransform: "uppercase",
  },
  buttonStyle: {
    height: 120,
    width: 150,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fafafa",
    borderRadius: 5,
    borderWidth: 0,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#e7674d",
  },
});
