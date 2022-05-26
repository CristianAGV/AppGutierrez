import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoggedTabNavigator from "./tabsLogged";

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <LoggedTabNavigator />
    </NavigationContainer>
  );
}
