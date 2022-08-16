import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Settings() {
  return (
    <View>
      <Text>Sign Up</Text>
    </View>
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
