import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const CalculatorScreen = ({ navigation }) => {
  const [onProfile, setOnProfile] = useState(false);
  const [data, setData] = useState({
    salary: 0,
    frequency: "",
    tax: 0,
    message: "",
  });

  const brackets = [
    [0, 226000, 0, 0.18],
    [226001, 353100, 40680, 0.26],
    [353101, 488700, 73726, 0.31],
    [488701, 641400, 115762, 0.36],
    [641401, 817600, 170734, 0.39],
    [817601, 1731600, 239452, 0.41],
    [1731601, Number.MAX_SAFE_INTEGER, 614912, 0.45],
  ];

  const calculate = async () => {
    if (data.frequency != "" && parseInt(data.salary) != 0) {
      let yearlySalary = data.salary;
      let index = 0;

      if (String(data.frequency) == "Monthly") {
        yearlySalary = yearlySalary * 12;
      }

      for (let i = 0; i < brackets.length; i++) {
        if (yearlySalary > brackets[i][1]) {
          continue;
        }
        index = i;
        break;
      }

      let tax =
        brackets[index][2] +
        brackets[index][3] * (yearlySalary - (brackets[index][0] - 1));

      setData((data) => ({
        ...data,
        salary: parseFloat(data.salary).toFixed(2),
        tax: tax,
      }));

      storeTax(tax, yearlySalary);
    }
  };

  const storeTax = async (tax, yearlySalary) => {
    let time = new Date().toLocaleString();

    try {
      await axios
        .post("http://localhost:8080/tax", {
          salary: Number(parseFloat(data.salary).toFixed(2)),
          frequency: data.frequency,
          tax: tax,
          email: props.email,
          time: time,
        })
        .then((val) => {
          setData((current) => ({ ...current, message: val.data }));
        })
        .catch((err) => {
          console.log("Error: " + err);
        });
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const formatValue = (n) => {
    let number = n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    number = number.replace(new RegExp(escapeRegExp(","), "g"), () => " ");

    return number;
  };

  return (
    <View style={styles.pageContainer}>
      <Ionicons
        name="person-circle"
        size={55}
        color="#282c34"
        style={{
          width: 55,
          position: "absolute",
          top: 0,
          right: 0,
          margin: 10,
        }}
        onPress={() => navigation.push("Profile")}
      />
      <View style={styles.taxContainer}>
        <View style={{ flex: 1 }}>
          <Text style={{ marginTop: 15, fontWeight: "bold" }}>
            Yearly Income Tax:
          </Text>
          <Text style={{ marginTop: 15, fontWeight: "bold", fontSize: 20 }}>
            R {formatValue(data.tax)}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ marginTop: 15, fontWeight: "bold" }}>
            Monthly Income Tax:
          </Text>
          <Text style={{ marginTop: 15, fontWeight: "bold", fontSize: 20 }}>
            R {formatValue(data.tax / 12)}
          </Text>
        </View>
      </View>
      <Text style={styles.textLabel}>How often do you get paid?</Text>
      <View>
        <RNPickerSelect
          value={data.frequency}
          onValueChange={(value) =>
            setData((data) => ({
              ...data,
              frequency: value,
            }))
          }
          items={[
            { label: "Monthly", value: "Monthly" },
            { label: "Yearly", value: "Yearly" },
          ]}
          style={picketSelectStyles}
        />
      </View>
      <Text style={styles.textLabel}>How much do you earn before tax?</Text>
      <TextInput
        style={styles.textBox}
        value={formatValue(String(data.salary))}
        keyboardType="numeric"
        onChangeText={(text) => {
          setData((data) => ({
            ...data,
            salary: text,
          }));
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "dodgerblue", flex: 1 }]}
          onPress={() => {
            if (!Number(data.salary)) {
              alert(
                "Your salary is invalid and can't contain alphabetical characters!"
              );
            }
            calculate();
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              width: 40,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: "dodgerblue",
            },
          ]}
          onPress={() => {
            setData({
              salary: "0",
              frequency: "",
              tax: 0,
              message: "",
            });
          }}
        >
          <Ionicons name="refresh-outline" color="dodgerblue" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  userButton: {
    borderWidth: 1,
    width: 53,
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 15,
    marginTop: 10,
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
  taxContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    marginTop: 15,
  },
  button: {
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 4,
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    height: 40,
    width: "100%",
    marginTop: 10,
  },
});

export default CalculatorScreen;
