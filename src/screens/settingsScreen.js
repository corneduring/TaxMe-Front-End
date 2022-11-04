import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SettingsStyles from "../styles/settingsStyles";
import { color } from "react-native-reanimated";

const SettingsScreen = () => {
  return (
    <View style={SettingsStyles.container}>
      <Text style={SettingsStyles.heading}>Settings</Text>
      <Text style={SettingsStyles.subHeading}>Profile Details:</Text>
      <Text style={SettingsStyles.profileAttribute}>Email:</Text>
      <Text style={SettingsStyles.profileValue}>corne048@gmail.com</Text>
      <Text style={SettingsStyles.profileAttribute}>Phone Number:</Text>
      <Text style={SettingsStyles.profileValue}>074 926 2946</Text>
      <Text style={SettingsStyles.profileAttribute}>
        Total Tax Calculations:
      </Text>
      <Text style={SettingsStyles.profileValue}>7</Text>
      <Text style={SettingsStyles.profileAttribute}>
        Most Recent Tax Calculation:
      </Text>
      <Text style={SettingsStyles.profileValue}>corne048@gmail.com</Text>
      <View style={SettingsStyles.buttonsContainer}>
        <TouchableOpacity style={SettingsStyles.button}>
          <Text style={SettingsStyles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SettingsStyles.button}>
          <Text style={SettingsStyles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[SettingsStyles.button, { backgroundColor: "#e60000" }]}
        >
          <Text style={SettingsStyles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
