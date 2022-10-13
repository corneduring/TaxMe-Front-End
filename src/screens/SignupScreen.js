import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles from "../styles/GlobalStyles";

const SignUpScreen = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    passwordValidator: "",
    message: "",
  });

  return (
    <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.logo, { height: "29%" }]}></View>
      <View style={[GlobalStyles.modal, { height: "71%" }]}>
        {/* Headings */}
        <Text style={GlobalStyles.heading}>Welcome to TaxMe!</Text>
        <Text style={GlobalStyles.subHeading}>Create your new account</Text>
        {/* Username Textbox */}
        <View style={GlobalStyles.textBoxContainer}>
          <Ionicons
            style={GlobalStyles.icon}
            name="person-outline"
            size={20}
            color="#000"
          />
          <TextInput
            value={signUpData.email}
            style={GlobalStyles.textBox}
            placeholder="Username"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({ ...signUpData, email: text }))
            }
          />
        </View>
        {/* Email Textbox */}
        <View style={GlobalStyles.textBoxContainer}>
          <Ionicons
            style={GlobalStyles.icon}
            name="mail-outline"
            size={20}
            color="#000"
          />
          <TextInput
            value={signUpData.email}
            style={GlobalStyles.textBox}
            placeholder="Email Address"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({ ...signUpData, email: text }))
            }
          />
        </View>
        {/* Phone Number Textbox */}
        <View style={GlobalStyles.textBoxContainer}>
          <Ionicons
            style={GlobalStyles.icon}
            name="phone-portrait-outline"
            size={20}
            color="#000"
          />
          <TextInput
            value={signUpData.email}
            style={GlobalStyles.textBox}
            placeholder="Phone Number"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({ ...signUpData, email: text }))
            }
          />
        </View>
        {/* Password Textbox */}
        <View style={GlobalStyles.textBoxContainer}>
          <Ionicons
            style={GlobalStyles.icon}
            name="lock-open-outline"
            size={20}
            color="#000"
          />
          <TextInput
            value={signUpData.email}
            style={GlobalStyles.textBox}
            placeholder="Password"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({ ...signUpData, email: text }))
            }
          />
        </View>
        {/* Password Confirm Textbox */}
        <View style={GlobalStyles.textBoxContainer}>
          <Ionicons
            style={GlobalStyles.icon}
            name="lock-open-outline"
            size={20}
            color="#000"
          />
          <TextInput
            value={signUpData.email}
            style={GlobalStyles.textBox}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(text) =>
              setSignUpData((signUpData) => ({ ...signUpData, email: text }))
            }
          />
        </View>
        {/* Sign Up Button */}
        <TouchableOpacity style={GlobalStyles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
