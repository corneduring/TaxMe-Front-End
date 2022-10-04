import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../context";

const LoginScreen = ({ navigation }) => {
  const { logIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tax Me</Text>
      <View style={{ alignContent: "flex-start" }}>
        <Text id="email" style={styles.textLabel}>
          Email
        </Text>
      </View>
      <TextInput
        style={styles.textBox}
        placeholder="example@example.com"
        onChangeText={(text) =>
          setLoginData((loginData) => ({
            ...loginData,
            email: text,
          }))
        }
        autoCapitalize="none"
      />
      <Text style={styles.textLabel}>Password</Text>
      <TextInput
        style={styles.textBox}
        placeholder="********"
        onChangeText={(text) =>
          setLoginData((loginData) => ({
            ...loginData,
            password: text,
          }))
        }
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "dodgerblue" }]}
        onPress={() => logIn()}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 15 }}>
        Don't have an account?{" "}
        <Text
          onPress={() => navigation.push("SignUp")}
          style={{ color: "dodgerblue", textDecorationLine: "underline" }}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 8,
  },
  textLabel: {
    fontSize: 15,
    marginTop: 8,
  },
  textBox: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 3,
    padding: 10,
  },
  button: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    padding: 5,
    borderRadius: 4,
  },
});

export default LoginScreen;
