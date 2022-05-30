import React, { useState } from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator } from "react-native";
import { useFonts, Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import MainNavigation from "./navigation";
import { SafeAreaView } from "react-native-safe-area-context";

import Store from "./store";
import { Provider } from "react-redux";

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={Store}>
        <MainNavigation />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
