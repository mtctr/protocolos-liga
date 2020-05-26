import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Login from "./screens/Login";
import Home from "./screens/Home";
import Detalhes from "./screens/Detalhes";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <AppStack.Screen name="Início" component={Home} options={{headerLeft: null}} />
        <AppStack.Screen name="Detalhes" component={Detalhes} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
