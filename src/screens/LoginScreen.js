import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthStackStyles from "../styles/AuthStackStyles";

const LoginScreen = ({ navigation }) => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
    message: "",
  });

  return (
    <View style={AuthStackStyles.container}>
      <View style={[AuthStackStyles.logo, { height: "48%" }]}></View>
      <View style={[AuthStackStyles.modal, { height: "52%" }]}>
        {/* Headings */}
        <Text style={AuthStackStyles.heading}>Welcome Back!</Text>
        <Text style={AuthStackStyles.subHeading}>Log into your account</Text>
        {/* Email Textbox */}
        <View style={AuthStackStyles.textBoxContainer}>
          <Ionicons
            style={AuthStackStyles.textBoxIcon}
            name="mail-outline"
            size={20}
            color="black"
          />
          <TextInput
            value={logInData.email}
            style={AuthStackStyles.textBox}
            placeholder="example@example.com"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((logInData) => ({ ...logInData, email: text }))
            }
          />
        </View>
        {/* Password Textbox */}
        <View style={AuthStackStyles.textBoxContainer}>
          <Ionicons
            style={AuthStackStyles.textBoxIcon}
            name="lock-closed-outline"
            size={20}
            color="black"
          />
          <TextInput
            value={logInData.password}
            style={AuthStackStyles.textBox}
            placeholder="********"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((logInData) => ({ ...logInData, password: text }))
            }
            secureTextEntry={true}
          />
        </View>
        {/* Login Button */}
        <TouchableOpacity style={AuthStackStyles.button}>
          <Text style={SettingsStyles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text>
          Don't have an account?{"  "}
          <Text
            onPress={() => navigation.push("SignUp")}
            style={{ color: "dodgerblue", textDecorationLine: "underline" }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
