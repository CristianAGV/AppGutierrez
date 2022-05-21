import React, { useState } from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator } from "react-native";
import { useFonts, Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import MainNavigation from "./navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <MainNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
