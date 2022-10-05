import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

// Custom Stack's imports
import HomeStack from "./src/routes/homeStack";
import AuthStack from "./src/routes/authStack";

import { AuthContext } from "./src/context";

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 40,
//   },
//   heading: {
//     fontSize: 35,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   textLabel: {
//     fontSize: 15,
//     marginTop: 8,
//   },
//   textBox: {
//     height: 40,
//     width: "100%",
//     borderColor: "gray",
//     borderWidth: 1,
//     marginTop: 8,
//     borderRadius: 3,
//     padding: 10,
//   },
//   button: {
//     width: "100%",
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 15,
//     padding: 5,
//     borderRadius: 4,
//   },
// });

export default App;
