import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { signIn } from "../features/auth";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email !== "" && password !== "") {
      dispatch(signIn({ email: email, password: password }));
    }
  };
  const handleSignup = () => {
    navigation.navigate("signup");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.mainText]}>Welcome Back! </Text>
      <Text style={[styles.text, { color: "#515259" }]}>
        Please sign in to your account
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#515259"}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"#515259"}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.textLight}>Forgot password?</Text>
      </TouchableOpacity>
      <Button title="Sign In" onPress={handleSignIn} />
      <View style={styles.questionContainer}>
        <Text style={styles.text}>Don't have an Account yet?</Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#181920",
  },
  text: {
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 40,
  },
  input: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: "#252A34",
    color: "white",
    borderRadius: 15,
  },
  textLight: {
    color: "#515259",
    textAlign: "right",
    marginBottom: 40,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  signUpText: {
    marginLeft: 5,
    color: "#555EA6",
  },
});
