import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Custom Stack's imports
import HomeStack from "./src/routes/homeStack";
import AuthStack from "./src/routes/authStack";

// Custom authentication to set user tokens upon
// logging in, signing in or signing up
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

export default App;
