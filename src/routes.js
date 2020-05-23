import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "./screens/Home";
import Login from "./screens/Login";
import Detalhes from "./screens/Detalhes";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />

        <AppStack.Screen name="Detalhes" component={Detalhes} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
