import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import { Alert } from "react-native";

const Profile = (props) => {
  const [profileData, setProfileData] = useState({
    storedCalculations: 0,
    message: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    password1: "",
    password2: "",
  });

  const isFocused = useIsFocused();
  useEffect(() => {
    getProfileData(props.email);
  }, [isFocused]);

  const getProfileData = async () => {
    try {
      await axios
        .post("http://localhost:8080/profile", {
          email: props.email,
        })
        .then((val) => {
          setProfileData(() => ({
            storedCalculations: val.data.StoredCalculations,
          }));
        })
        .catch((err) => {
          console.log("Error: " + err);
        });
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const updatePasswords = async () => {
    try {
      await axios
        .post("http://localhost:8080/update", {
          email: props.email,
          currentPassword: passwordData.currentPassword,
          password1: passwordData.password1,
          password2: passwordData.password2,
        })
        .then((val) => {
          alert(val.data);
        })
        .catch((err) => {
          console.log("Error: " + err);
        });
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <View style={[styles.container, { paddingVertical: 20 }]}>
      <ScrollView>
        <View>
          <Text
            style={[
              styles.heading,
              {
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 15,
              },
            ]}
          >
            Profile Data
          </Text>
          <Text style={styles.heading}>
            <Text style={{ fontWeight: "600" }}>Email:</Text> {props.email}
          </Text>
          <Text style={styles.heading}>
            <Text style={{ fontWeight: "600" }}>Stored Calculations:</Text>{" "}
            {profileData.storedCalculations}
          </Text>
          {/* <Text style={styles.heading}>
            <Text style={{ fontWeight: "600" }}>
              Most Recent{"\n"}Calculation:
            </Text>{" "}
            {profileData.mostRecentCalculation}
          </Text> */}
        </View>
        <View>
          <Text
            style={[
              styles.heading,
              {
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 10,
                marginTop: 15,
              },
            ]}
          >
            Change Password
          </Text>
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.textLabel}>Current Password</Text>
            <TextInput
              style={styles.textBox}
              placeholder="********"
              autoCapitalize="none"
              value={passwordData.currentPassword}
              secureTextEntry={true}
              onChangeText={(text) =>
                setPasswordData((current) => ({
                  ...current,
                  currentPassword: text,
                }))
              }
            />
            <Text style={styles.textLabel}>New Password</Text>
            <TextInput
              style={styles.textBox}
              placeholder="********"
              autoCapitalize="none"
              value={passwordData.password1}
              secureTextEntry={true}
              onChangeText={(text) =>
                setPasswordData((current) => ({ ...current, password1: text }))
              }
            />
            <Text style={styles.textLabel}>Match New Password</Text>
            <TextInput
              style={styles.textBox}
              placeholder="********"
              autoCapitalize="none"
              value={passwordData.password2}
              secureTextEntry={true}
              onChangeText={(text) =>
                setPasswordData((current) => ({ ...current, password2: text }))
              }
            />
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: "dodgerblue", marginBottom: 0 },
              ]}
              onPress={() => {
                if (passwordData.password1.length < 6) {
                  alert("Your password must be at least 6 characters long?");
                } else {
                  updatePasswords();
                }
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Update Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "tomato", margin: 0 }]}
              onPress={() => {
                Alert.alert(
                  "Warning!",
                  "Are you sure you want to log out of your account?",
                  [
                    {
                      text: "Yes",
                      onPress: () => signOut(),
                    },
                    {
                      text: "No",
                      onPress: () => {
                        return;
                      },
                    },
                  ]
                );
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  heading: {
    fontSize: 17,
  },
  textBox: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 3,
    padding: 10,
  },
  textLabel: {
    fontSize: 15,
    marginTop: 8,
  },
  button: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    marginTop: 15,
    padding: 5,
    borderRadius: 4,
    fontWeight: "bold",
  },
});

export default Profile;
