import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import CalculatorScreen from "./calculatorScreen";
import HistoryScreen from "./historyScreen";
import SettingsScreen from "./educationScreen";

//Screen names
const calculatorScreenName = "Calculator";
const historyScreenName = "History";
const resourcesScreenName = "Learn";

const Tab = createBottomTabNavigator();

function MainContainer(email) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={calculatorScreenName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === calculatorScreenName) {
              iconName = focused ? "calculator" : "calculator-outline";
            } else if (rn === historyScreenName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === resourcesScreenName) {
              iconName = focused ? "book" : "book-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { padding: 10, height: 70 },
          activeTintColor: "dodgerblue",
          inactiveTintColor: "grey",
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          headerShown: route.name === "Calculator" ? false : true,
        })}
      >
        <Tab.Screen
          name={calculatorScreenName}
          children={() => <CalculatorScreen email={email.email} />}
        />
        <Tab.Screen
          name={historyScreenName}
          children={() => <HistoryScreen email={email.email} />}
        />
        <Tab.Screen
          name={resourcesScreenName}
          children={() => <SettingsScreen email={email.email} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
