import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Intro from "../screens/Intro";
import Login from "../screens/auth/Login";
import ConnexionPhone from "../screens/auth/ConnexionPhone";
import Inscription from "../screens/auth/Inscription";
const Stack = createStackNavigator();
function AppNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    <Stack.Screen
        name="ConnexionPhone"
        component={ConnexionPhone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inscription"
        component={Inscription}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default AppNavigation;
