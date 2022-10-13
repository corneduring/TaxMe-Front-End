import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles from "../styles/GlobalStyles";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.logo, { height: "48%" }]}></View>
      <View style={[GlobalStyles.modal, { height: "52%" }]}>
        {/* Headings */}
        <Text style={GlobalStyles.heading}>Welcome Back!</Text>
        <Text style={GlobalStyles.subHeading}>Log into your account</Text>
        {/* Email Textbox */}
        <View style={GlobalStyles.textBoxContainer}>
          <Ionicons
            style={GlobalStyles.icon}
            name="mail-outline"
            size={20}
            color="#000"
          />
          <TextInput
            style={GlobalStyles.textBox}
            placeholder="example@example.com"
            placeholderTextColor="#000"
            autoCapitalize="none"
          />
        </View>
        {/* Password Textbox */}
        <View style={GlobalStyles.textBoxContainer}>
          <Ionicons
            style={GlobalStyles.icon}
            name="lock-closed-outline"
            size={20}
            color="#000"
          />
          <TextInput
            style={GlobalStyles.textBox}
            placeholder="********"
            placeholderTextColor="#000"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        {/* Login Button */}
        <TouchableOpacity style={[GlobalStyles.button, { marginBottom: 20 }]}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
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
