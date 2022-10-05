import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Calculator from "../screens/calculatorScreen";
import Profile from "../screens/profileScreen";

const Settings = createStackNavigator();
const SettingsStack = () => (
  <Settings.Navigator>
    <Settings.Screen name="Calculator" component={Calculator} />
    <Settings.Screen name="Profile" component={Profile} />
  </Settings.Navigator>
);

export default SettingsStack;
