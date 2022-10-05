import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import SettingsStack from "./settingsStack";
import History from "../screens/historyScreen";
import EducationHub from "../screens/educationScreen";

const Home = createBottomTabNavigator();
const HomeStack = () => (
  <Home.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let routeName = route.name;

        if (routeName === "Home") {
          iconName = focused ? "calculator" : "calculator-outline";
        } else if (routeName === "History") {
          iconName = focused ? "list" : "list-outline";
        } else if (routeName === "Education Hub") {
          iconName = focused ? "book" : "book-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: { height: 60 },
      activeTintColor: "dodgerblue",
      inactiveTintColor: "grey",
      tabBarShowLabel: false,
    })}
  >
    <Home.Screen
      name="Home"
      component={SettingsStack}
      options={{ headerShown: false }}
    />
    <Home.Screen name="History" component={History} />
    <Home.Screen name="Education Hub" component={EducationHub} />
  </Home.Navigator>
);

export default HomeStack;
