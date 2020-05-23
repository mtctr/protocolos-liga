import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Procedimentos({ route }) {
  const navigation = useNavigation();
  const nome = route.nome;
  navigation.setOptions({ title: `Procedimentos de ${nome}` });
  return (
    <View>
      <Text>Procedimentos</Text>
    </View>
  );
}
