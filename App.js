import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Custom Stack's imports
import RootStack from "./src/routes/rootStack";
 
function App() {
  return (
    <NavigationContainer>
      <RootStack userToken="asdf" />
    </NavigationContainer>
  );
}

export default App;
