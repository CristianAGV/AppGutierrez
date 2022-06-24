import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "../../screens/Categories";
import Products from "../../screens/Products";
import ProductDetail from "../../screens/ProductDetail";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerStyle: {
            backgroundColor: "#181920",
          },
          headerTintColor: "#555EA6",
        }}
      />

      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.categoryName,

          headerStyle: {
            backgroundColor: "#181920",
          },
          headerTintColor: "#555EA6",
        })}
      />

      <Stack.Screen
        name="detail"
        component={ProductDetail}
        options={({ route }) => ({
          title: route.params.productName,

          headerStyle: {
            backgroundColor: "#181920",
          },
          headerTintColor: "#555EA6",
        })}
      />
    </Stack.Navigator>
  );
}
