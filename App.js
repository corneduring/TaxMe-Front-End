import "react-native-gesture-handler";
import React, { useState, useMemo } from "react";
import MainContainer from "./navigation/mainContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { setGlobalState, useGlobalState } from "./methods/state";
import { LoginContext } from "./helper/state";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let userEmail = useGlobalState("email");

  const handleEmailChange = (email) => {
    setGlobalState("email", email);
  };

  const appContextValue = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
    }),
    [isLoggedIn]
  );

  const Login = ({ navigation }) => {
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
      message: "",
    });

    const login = async () => {
      try {
        const { data: response } = await axios.post(
          "http://localhost:8080/login",
          {
            email: loginData.email,
            password: loginData.password,
          }
        );

        setLoginData((current) => ({ ...current, message: response }));

        if (response != "Valid") {
          alert(response);
        } else {
          handleEmailChange(loginData.email);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Tax Me</Text>
        <View style={{ alignContent: "flex-start" }}>
          <Text id="email" style={styles.textLabel}>
            Email
          </Text>
        </View>
        <TextInput
          style={styles.textBox}
          placeholder="example@example.com"
          value={loginData.email}
          onChangeText={(text) =>
            setLoginData((loginData) => ({
              ...loginData,
              email: text,
            }))
          }
          autoCapitalize="none"
        />
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
          style={styles.textBox}
          placeholder="********"
          value={loginData.password}
          onChangeText={(text) =>
            setLoginData((loginData) => ({
              ...loginData,
              password: text,
            }))
          }
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => login()}
          style={[styles.button, { backgroundColor: "dodgerblue" }]}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 15 }}>
          Don't have an account?{" "}
          <Text
            onPress={() => navigation.push("Sign Up")}
            style={{ color: "dodgerblue", textDecorationLine: "underline" }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    );
  };

  const SignUp = ({ navigation: { goBack } }) => {
    const [signUpData, setSignUpData] = useState({
      email: "",
      password1: "",
      password2: "",
      message: "",
    });

    const signUp = async () => {
      try {
        const { data: response } = await axios.post(
          "http://localhost:8080/signup",
          {
            email: signUpData.email,
            password1: signUpData.password1,
            password2: signUpData.password2,
          }
        );

        setSignUpData((current) => ({ ...current, message: response }));

        if (response != "Valid") {
          alert(response);
        } else {
          goBack("Sign Up");
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Tax Me</Text>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput
          value={signUpData.email}
          placeholder="example@example.com"
          style={styles.textBox}
          autoCapitalize="none"
          onChangeText={(text) =>
            setSignUpData((signUpData) => ({
              ...signUpData,
              email: text,
            }))
          }
        />
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
          value={signUpData.password1}
          style={styles.textBox}
          placeholder="********"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) =>
            setSignUpData((signUpData) => ({
              ...signUpData,
              password1: text,
            }))
          }
        />
        <Text style={styles.textLabel}>Match Password</Text>
        <TextInput
          value={signUpData.password2}
          style={styles.textBox}
          placeholder="********"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) =>
            setSignUpData((signUpData) => ({
              ...signUpData,
              password2: text,
            }))
          }
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "dodgerblue" }]}
          onPress={() => {
            if (signUpData.password1.length < 6) {
              alert("You password needs to be at least 6 characters long!");
            } else {
              signUp();
            }
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Stack = createNativeStackNavigator();

  const Welcome = () => {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer value={appContextValue}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isLoggedIn ? (
            <Stack.Screen name="Login" component={Welcome} />
          ) : (
            <Stack.Screen
              name="Home"
              children={() => <MainContainer email={userEmail[0]} />}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LoginContext.Provider>
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
