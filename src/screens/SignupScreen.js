import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../context";

const SignUpScreen = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    passwordValidator: "",
    message: "",
  });

  // const signUp = async () => {
  //   try {
  //     const { data: response } = await axios.post(
  //       "http://localhost:8080/signup",
  //       {
  //         email: signUpData.email,
  //         password: signUpData.password,
  //         passwordValidator: signUpData.passwordValidator,
  //       }
  //     );

  //     setSignUpData((current) => ({ ...current, message: response }));

  //     if (response != "") {
  //       alert(response);
  //     } else {
  //       goBack("Sign Up");
  //     }
  //   } catch (error) {
  //     console.log("Error: " + error);
  //   }
  // };

  const { signUp } = React.useContext(AuthContext);
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
        value={signUpData.password}
        style={styles.textBox}
        placeholder="********"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(text) =>
          setSignUpData((signUpData) => ({
            ...signUpData,
            password: text,
          }))
        }
      />
      <Text style={styles.textLabel}>Match Password</Text>
      <TextInput
        value={signUpData.passwordValidator}
        style={styles.textBox}
        placeholder="********"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(text) =>
          setSignUpData((signUpData) => ({
            ...signUpData,
            passwordValidator: text,
          }))
        }
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "dodgerblue" }]}
        onPress={() => {
          signUp();
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default SignUpScreen;
