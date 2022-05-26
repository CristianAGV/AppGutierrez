import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreLogin from "../../screens/PreLogin";
import Login from "../../screens/Login";
import Signup from "../../screens/Signup";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="preLogin">
      <Stack.Screen
        name="prelogin"
        component={PreLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
}
