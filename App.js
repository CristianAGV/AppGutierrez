import React, { useState } from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator } from "react-native";
import { useFonts, Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import Login from "./screens/Login";
import PreLogin from "./screens/PreLogin";
import Signup from "./screens/Signup";
import Categories from "./screens/Categories";

export default function App() {
  const [isLoginShown, setIsLoginShown] = useState(false);
  const [isSignupShown, setIsSignupShown] = useState(false);
  const [isPreloginShown, setIsPreloginShown] = useState(true);
  const [isCategoriesShown, setisCategoriesShown] = useState(false);
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const handleLogin = () => {
    setIsSignupShown(false);
    setIsPreloginShown(false);
    setIsLoginShown(true);
  };

  const handleSignup = () => {
    setIsLoginShown(false);
    setIsSignupShown(true);
  };

  const handleCategories = () => {
    setIsLoginShown(false);
    setisCategoriesShown(true);
  };

  return (
    <View style={styles.container}>
      {isPreloginShown && <PreLogin handleLogin={handleLogin} />}

      {isLoginShown && (
        <Login
          handleSignup={handleSignup}
          handleCategories={handleCategories}
        />
      )}
      {isSignupShown && <Signup handleLogin={handleLogin} />}
      {isCategoriesShown && <Categories />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
