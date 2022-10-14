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
import CalculatorStyles from "../styles/CalculatorStyles";
import AuthStackStyles from "../styles/AuthStackStyles";

const CalculatorScreen = ({ navigation }) => {
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
    <View style={CalculatorStyles.container}>
      {/* Heading */}
      <Text style={CalculatorStyles.heading}>Calculator</Text>
      {/* User's taxes to be paid based on a yearly salary */}
      <Text style={CalculatorStyles.subHeading}>Yearly Income Tax:</Text>
      <Text style={CalculatorStyles.taxValue}>
        R{"  "}
        {formatValue(data.tax)}
      </Text>
      {/* User's taxes to be paid based on a monthly salary */}
      <Text style={CalculatorStyles.subHeading}>Monthly Income Tax:</Text>
      <Text style={CalculatorStyles.taxValue}>
        R{"  "}
        {formatValue(data.tax / 12)}
      </Text>
      {/* Tax Calculator */}
      <View style={CalculatorStyles.calculatorContainer}>
        <Text style={CalculatorStyles.textLabel}>
          How often do you get paid?
        </Text>
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
        <Text style={CalculatorStyles.textLabel}>
          How much do you earn before tax?
        </Text>
        <TextInput
          style={CalculatorStyles.textBox}
          value={formatValue(String(data.salary))}
          keyboardType="numeric"
          onChangeText={(text) => {
            setData((data) => ({
              ...data,
              salary: text,
            }));
          }}
        />
        {/* Calculator Buttons */}
        <View style={CalculatorStyles.buttonsContainer}>
          <TouchableOpacity
            style={[AuthStackStyles.button, { flex: 1 }]}
            onPress={() => {
              {
                !Number(data.salary)
                  ? alert("You entered an invalid salary!")
                  : calculate();
              }
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Calculate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CalculatorStyles.button}
            onPress={() => {
              setData({
                salary: "0",
                frequency: "",
                tax: 0,
                message: "",
              });
            }}
          >
            <Ionicons name="refresh-outline" color="dodgerblue" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: "9px",
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default CalculatorScreen;
