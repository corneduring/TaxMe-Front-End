import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthStackStyles from "../styles/AuthStackStyles";

const SignUpScreen = ({ navigation }) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    passwordValidator: "",
    message: "",
  });

  return (
    <View style={AuthStackStyles.container}>
      <View style={[AuthStackStyles.logo, { height: "31%" }]}></View>
      <View style={[AuthStackStyles.modal, { height: "69%" }]}>
        {/* Headings */}
        <Text style={AuthStackStyles.heading}>Welcome to TaxMe!</Text>
        <Text style={AuthStackStyles.subHeading}>Create your new account</Text>
        {/* Email Textbox */}
        <View style={AuthStackStyles.textBoxContainer}>
          <Ionicons
            style={AuthStackStyles.textBoxIcon}
            name="mail-outline"
            size={20}
            color="black"
          />
          <TextInput
            value={signUpData.email}
            style={AuthStackStyles.textBox}
            placeholder="Email Address"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({ ...signUpData, email: text }))
            }
          />
        </View>
        {/* Phone Number Textbox */}
        <View style={AuthStackStyles.textBoxContainer}>
          <Ionicons
            style={AuthStackStyles.textBoxIcon}
            name="phone-portrait-outline"
            size={20}
            color="black"
          />
          <TextInput
            value={signUpData.phoneNumber}
            style={AuthStackStyles.textBox}
            placeholder="Phone Number"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({
                ...signUpData,
                phoneNumber: text,
              }))
            }
          />
        </View>
        {/* Password Textbox */}
        <View style={AuthStackStyles.textBoxContainer}>
          <Ionicons
            style={AuthStackStyles.textBoxIcon}
            name="lock-open-outline"
            size={20}
            color="black"
          />
          <TextInput
            value={signUpData.password}
            style={AuthStackStyles.textBox}
            placeholder="Password"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({ ...signUpData, password: text }))
            }
          />
        </View>
        {/* Password Confirm Textbox */}
        <View style={AuthStackStyles.textBoxContainer}>
          <Ionicons
            style={AuthStackStyles.textBoxIcon}
            name="lock-open-outline"
            size={20}
            color="black"
          />
          <TextInput
            value={signUpData.passwordValidator}
            style={AuthStackStyles.textBox}
            placeholder="Confirm Password"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({
                ...signUpData,
                passwordValidator: text,
              }))
            }
          />
        </View>
        {/* Sign Up Button */}
        <TouchableOpacity style={AuthStackStyles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>
        <Text>
          Already have an account?{"  "}
          <Text
            onPress={() => navigation.goBack()}
            style={{ color: "dodgerblue", textDecorationLine: "underline" }}
          >
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
