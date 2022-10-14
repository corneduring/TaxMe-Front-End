import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Custom Stack's imports
import HomeStack from "./src/routes/homeStack";
import AuthStack from "./src/routes/authStack";
import LoginScreen from "./src/screens/logInScreen";
import SignUpScreen from "./src/screens/signUpScreen";
import CalculatorScreen from "./src/screens/calculatorScreen";
import RootStack from "./src/routes/rootStack";

function App() {
  return (
    <NavigationContainer>
      <RootStack userToken="asdf" />
    </NavigationContainer>
  );
}

export default App;
