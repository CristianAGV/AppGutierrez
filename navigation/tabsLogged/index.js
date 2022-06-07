import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "../stacks/homeStack";
import CartNavigation from "../stacks/cartStack";
import LocationNavigation from "../stacks/locationStack";
import { AntDesign } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

export default function LoggedTabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabContainer,
      }}
    >
      <BottomTabs.Screen
        name="home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <AntDesign name="home" size={24} color="#fff" />
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="cart"
        component={CartNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <AntDesign name="shoppingcart" size={24} color="#fff" />
              <View style={styles.amountContainer}>
                <Text style={styles.amountText}>0</Text>
              </View>
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="locationsTab"
        component={LocationNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <AntDesign name="enviromento" size={24} color="#fff" />
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "#555EA6",
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
  },

  amountContainer: {
    position: "absolute",
    right: -10,
    top: 5,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#BF1A2F",
  },

  amountText: {
    fontSize: 10,
  },
});
