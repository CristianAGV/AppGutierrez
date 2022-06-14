import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Locations from "../../screens/Locations";
import SaveLocation from "../../screens/SaveLocation";
import GetLocation from "../../screens/GetLocation";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

export default function LocationNavigation() {
  return (
    <Stack.Navigator initialRouteName="locations">
      <Stack.Screen
        name="locations"
        component={Locations}
        options={({ navigation }) => ({
          title: "Locations",
          headerStyle: {
            backgroundColor: "#181920",
          },
          headerTintColor: "#555EA6",
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("save-location")}
              >
                <Ionicons
                  name="ios-add-circle-outline"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
            );
          },
        })}
      />

      <Stack.Screen
        name="save-location"
        component={SaveLocation}
        options={({ navigation }) => ({
          title: "Save Location",
          headerStyle: {
            backgroundColor: "#181920",
          },
          headerTintColor: "#555EA6",
        })}
      />

      <Stack.Screen
        name="get-location"
        component={GetLocation}
        options={({ navigation }) => ({
          title: "Get Location",
          headerStyle: {
            backgroundColor: "#181920",
          },
          headerTintColor: "#555EA6",
        })}
      />
    </Stack.Navigator>
  );
}
