import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthStackStyles from "../styles/AuthStackStyles";

import Calculator from "../screens/calculatorScreen";
import History from "../screens/historyScreen";
import Settings from "../screens/settingsScreen";

const Home = createBottomTabNavigator();
const HomeStack = () => (
  <Home.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        let iconName;
        let routeName = route.name;

        if (routeName === "Home") {
          iconName = focused ? "calculator" : "calculator-outline";
        } else if (routeName === "History") {
          iconName = focused ? "list" : "list-outline";
        } else if (routeName === "Settings") {
          iconName = focused ? "settings" : "settings-outline";
        }

        return (
          <Ionicons
            name={iconName}
            size={size}
            color={focused ? "white" : "#294f86"}
          />
        );
      },
      tabBarStyle: AuthStackStyles.tabBar,
      tabBarShowLabel: false,
    })}
  >
    <Home.Screen
      name="Home"
      component={Calculator}
      options={{ headerShown: false }}
    />
    <Home.Screen
      name="History"
      component={History}
      options={{ headerShown: false }}
    />
    <Home.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: false }}
    />
  </Home.Navigator>
);

export default HomeStack;
