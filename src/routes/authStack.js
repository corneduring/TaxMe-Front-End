import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "../screens/loginScreen";
import SignUp from "../screens/signupScreen";

const Auth = createStackNavigator();
const AuthStack = () => (
  <Auth.Navigator>
    <Auth.Screen name="LogIn" component={LogIn} options={{ title: "Log In" }} />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "Sign Up" }}
    />
  </Auth.Navigator>
);

export default AuthStack;
