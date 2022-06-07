import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoggedTabNavigator from "./tabsLogged";
import LoginNavigation from "./stacks/auth/loginStack";
import { useSelector } from "react-redux";

export default function MainNavigation() {
  const { email } = useSelector((store) => store.auth.user);
  const { userLoggedEmail } = useSelector((store) => store.auth.userLogged);

  return (
    <NavigationContainer>
      {email !== "" || userLoggedEmail !== "" ? (
        <LoggedTabNavigator />
      ) : (
        <LoginNavigation />
      )}
    </NavigationContainer>
  );
}
