import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

export default function Detalhes({ navigation }) {
  navigation.setOptions({ title: 'Urologia' });
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cateterismo Vesical</Text>
      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ante ipsum, lacinia a congue a, fermentum at urna. In ante elit,
          condimentum non cursus vitae, finibus et lorem. Cras eu sagittis nunc,
          vitae tempor sem. Ut eget iaculis turpis. Nunc gravida odio et nunc
          ornare, in semper dui pharetra. In tempus ipsum eu eros pellentesque,
          nec volutpat urna condimentum. Integer dapibus feugiat lacus nec
          finibus. Vivamus efficitur et nisi ut fermentum. Ut eros dolor,
          iaculis sed feugiat eget, pellentesque et diam. Vestibulum vitae leo
          placerat, sodales metus id, posuere lorem. Aliquam erat volutpat.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
          nunc tellus, semper ut auctor eu, porta eget mauris.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ante ipsum, lacinia a congue a, fermentum at urna. In ante elit,
          condimentum non cursus vitae, finibus et lorem. Cras eu sagittis nunc,
          vitae tempor sem. Ut eget iaculis turpis. Nunc gravida odio et nunc
          ornare, in semper dui pharetra. In tempus ipsum eu eros pellentesque,
          nec volutpat urna condimentum. Integer dapibus feugiat lacus nec
          finibus. Vivamus efficitur et nisi ut fermentum. Ut eros dolor,
          iaculis sed feugiat eget, pellentesque et diam. Vestibulum vitae leo
          placerat, sodales metus id, posuere lorem. Aliquam erat volutpat.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
          nunc tellus, semper ut auctor eu, porta eget mauris.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight - 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
