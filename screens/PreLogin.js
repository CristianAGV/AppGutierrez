import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
export default function PreLogin(props) {
  const handleLogin = () => {
    props.handleLogin();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0.2)", "rgb(0,0,0)"]}
        start={{
          x: 0.5,
          y: 0.3,
        }}
        style={styles.gradientContainer}
      >
        <View style={styles.textContainer}>
          <Text style={styles.logo}>FITZONE</Text>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              Are you willing to inmerse yourself into the world's best sport
              equipment e-commerce?
            </Text>
          </View>
          <Button title="Get Started" onPress={handleLogin} />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/prelogin.jpg")}
            resizeMode="cover"
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  gradientContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    zIndex: 2,
  },
  textContainer: {
    marginBottom: 50,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  logo: {
    fontFamily: "Quicksand_400Regular",
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  questionContainer: {
    width: "80%",
  },
  question: {
    textAlign: "center",
    marginBottom: 40,
    color: "white",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    zIndex: -1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
