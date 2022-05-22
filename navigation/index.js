import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreLogin from "../screens/PreLogin";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Categories from "../screens/Categories";
import Products from "../screens/Products";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="preLogin">
        <Stack.Screen
          name="prelogin"
          component={PreLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen
          name="categories"
          component={Categories}
          options={{
            headerStyle: {
              backgroundColor: "#181920",
            },
            headerTintColor: "#555EA6",
          }}
        />

        <Stack.Screen
          name="products"
          component={Products}
          // options={{
          //
          // }}
          options={({ route }) => ({
            title: route.params.categoryName,
            categoryId: route.params.categoryId,
            headerStyle: {
              backgroundColor: "#181920",
            },
            headerTintColor: "#555EA6",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
