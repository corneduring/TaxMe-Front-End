import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeStack from "./homeStack";
import AuthStack from "./authStack";

const Root = createStackNavigator();
const RootStack = ({ userToken }) => (
  <Root.Navigator screenOptions={{ headerShown: false }}>
    {userToken ? (
      <Root.Screen
        name="App"
        component={HomeStack}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <Root.Screen
        name="Auth"
        component={AuthStack}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </Root.Navigator>
);

export default RootStack;
