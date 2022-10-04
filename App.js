import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";

// Custom Pages' Imports
import LogIn from "./src/screens/loginScreen";
import SignUp from "./src/screens/signupScreen";
import Calculator from "./src/screens/calculatorScreen";
import History from "./src/screens/historyScreen";
import EducationHub from "./src/screens/educationScreen";
import Profile from "./src/screens/profileScreen";

import { AuthContext } from "./src/context";

const Home = createBottomTabNavigator();
const HomeStack = () => (
  <Home.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let routeName = route.name;

        if (routeName === "Calculator") {
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
      name="Calculator"
      component={SettingsStack}
      options={{ headerShown: false }}
    />
    <Home.Screen name="History" component={History} />
    <Home.Screen name="Education Hub" component={EducationHub} />
  </Home.Navigator>
);

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

const Settings = createStackNavigator();
const SettingsStack = () => (
  <Settings.Navigator>
    <Settings.Screen name="Calculator" component={Calculator} />
    <Settings.Screen name="Profile" component={Profile} />
  </Settings.Navigator>
);

const Root = createStackNavigator();
const RootStack = ({ userToken }) => (
  <Root.Navigator headerMode="none">
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

function App() {
  const [userToken, setUserToken] = React.useState(null);
  const authContext = React.useMemo(() => {
    return {
      logIn: () => {
        setUserToken("asdf");
      },
      signUp: () => {
        setUserToken("asdf");
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 8,
  },
  textLabel: {
    fontSize: 15,
    marginTop: 8,
  },
  textBox: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 3,
    padding: 10,
  },
  button: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    padding: 5,
    borderRadius: 4,
  },
});

export default App;
