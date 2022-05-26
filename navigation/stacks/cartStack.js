import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../screens/Cart";

const Stack = createNativeStackNavigator();

export default function CartNavigation() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerStyle: {
            backgroundColor: "#181920",
          },
          headerTintColor: "#555EA6",
        }}
      />
    </Stack.Navigator>
  );
}
