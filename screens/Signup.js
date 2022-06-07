import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { signUp } from "../features/auth";

export default function Signup({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleLogin = () => {
    navigation.navigate("login");
  };

  const signUpUser = () => {
    if (email !== "" && password !== "" && password === confirmPassword) {
      dispatch(signUp({ email: email, password: password }));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.mainText]}>Create New Account </Text>
      <Text style={[styles.text, { color: "#515259" }]}>
        Please Fill in the form to continue
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={"#515259"}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor={"#515259"}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"#515259"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={"#515259"}
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <Button title="Sign Up" onPress={signUpUser} />
      <View style={styles.questionContainer}>
        <Text style={styles.text}>Have an Account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.signUpText}>Sign In</Text>
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
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: "#252A34",
    color: "white",
    borderRadius: 15,
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
