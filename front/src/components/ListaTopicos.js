import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Topico from "./Topico";

export default function ListaTopicos() {
  return (
    <View style={styles.container}>
      <Topico>Urologia</Topico>
      <Topico>Medicina Nuclear</Topico>
      <Topico>Infectologia</Topico>
      <Topico>Hematologia</Topico>
      <Topico>Anestesiologia</Topico>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap" },
});
