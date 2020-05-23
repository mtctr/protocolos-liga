import React from "react";
import { ScrollView } from "react-native";

import Servico from "../components/Servico";
import ListaTopicos from "../components/ListaTopicos";
import CommonStyles from "../components/CommonStyles";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Servico>Medicina</Servico>
      <ListaTopicos />
    </ScrollView>
  );
}

const styles = CommonStyles();
