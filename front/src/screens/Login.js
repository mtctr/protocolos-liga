import React from "react";
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from '@react-navigation/native';

import Api from '../services/Api';

export default function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/icon.png')}
        style={styles.imageStyle}
      />

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Seja bem-vindo ao Aplicativo da LIGA!</Text>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.buttonLogin} onPress={() => signIn({ username, password })}>
        <Text style={styles.textBtnLogin}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );

  async function signIn({ username, password })
  {
    await Api.post('/account/login', { username, password })
      .then(
        (response) => { 
          const user = response.data;

          if (user.success)
          {
            navigation.navigate('Início');
          }
        },
        (error) => { 
          alert("Usuário e/ou Senha inválido!");
        },
      );

  }
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
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 16,
    color: "#888"
  },
  imageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    marginTop: -20,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    width: "100%",
    height: 40,
    margin: 5,
  },
  buttonLogin: {
    height: 40,
    width: "100%",
    backgroundColor: "#E44855",
    borderRadius: 15,
  },
  textBtnLogin: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    padding: 6,
  }
});
