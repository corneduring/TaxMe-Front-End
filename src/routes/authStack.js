import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "../screens/logInScreen";
import SignUp from "../screens/signUpScreen";

const Auth = createStackNavigator();
const AuthStack = () => (
  <Auth.Navigator screenOptions={{ headerShown: false }}>
    <Auth.Screen name="LogIn" component={LogIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthStack;
