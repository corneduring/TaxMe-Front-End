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

const CalculatorScreen = () => {
  const [data, setData] = useState({
    salary: 0,
    frequency: "",
    tax: 0,
    netSalary: 0,
    message: "",
  });

  const taxBrackets = [
    [0, 226000, 0, 0.18],
    [226001, 353100, 40680, 0.26],
    [353101, 488700, 73726, 0.31],
    [488701, 641400, 115762, 0.36],
    [641401, 817600, 170734, 0.39],
    [817601, 1731600, 239452, 0.41],
    [1731601, Number.MAX_SAFE_INTEGER, 614912, 0.45],
  ];

  const calculateTax = async () => {
    // Only calculate the tax if the user has changed the default values
    // of the payment frequency and income fields
    if (parseInt(data.salary) != 0 && data.frequency != "") {
      // Capture the exact time the calculation was requested
      let time = new Date().toLocaleString();
      // If the frequency is to be "Monthly" then multiply the salary entered
      // by 12 to get the yearly salary based on that same rate
      let salary = data.frequency == "Monthly" ? data.salary * 12 : data.salary;
      let index = 0;

      // Determine in which tax bracket the user's calculation
      // falls under, based on the salary entered
      for (let i = taxBrackets.length - 1; i > 0; i--) {
        if (salary >= taxBrackets[i][0]) {
          index = i;
          break;
        }
      }

      // Calculate the tax based on a yearly salary
      let tax =
        taxBrackets[index][2] +
        taxBrackets[index][3] * (salary - (taxBrackets[index][0] - 1));

      // Update the state
      setData((data) => ({
        ...data,
        netSalary:
          data.frequency == "Monthly" ? (salary - tax) / 12 : salary - tax,
        tax: tax,
      }));
    }
  };

  const formatCurrencyValue = (n) => {
    let number = n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    number = number.replace(
      new RegExp(",".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
      () => " "
    );

    return number;
  };

  return (
    <View style={CalculatorStyles.container}>
      {/* Heading */}
      <Text style={CalculatorStyles.heading}>Calculator</Text>
      {/* User's taxes to be paid based on a yearly salary */}
      <View style={CalculatorStyles.taxContainer}>
        <Text style={CalculatorStyles.subHeading}>Yearly Income Tax:</Text>
        <Text style={CalculatorStyles.taxValue}>
          R{"  "}
          {formatCurrencyValue(data.tax)}
        </Text>
        {/* User's taxes to be paid based on a monthly salary */}
        <Text style={CalculatorStyles.subHeading}>Monthly Income Tax:</Text>
        <Text style={CalculatorStyles.taxValue}>
          R{"  "}
          {formatCurrencyValue(data.tax / 12)}
        </Text>
        {/* User's salary left over after income taxes have been deducted.
        This net salary is based off of the payment frequency chosen in
        the drop-down below */}
        <Text style={CalculatorStyles.subHeading}>Net Salary:</Text>
        <Text style={CalculatorStyles.taxValue}>
          R{"  "}
          {formatCurrencyValue(data.netSalary)}
        </Text>
      </View>
      {/* Tax Calculator */}
      <Text style={CalculatorStyles.textLabel}>How often do you get paid?</Text>
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
        value={formatCurrencyValue(String(data.salary))}
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
            calculateTax();
          }}
        >
          <Text style={CalculatorStyles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalculatorStyles.resetButton}
          onPress={() => {
            setData({
              salary: 0,
              frequency: "",
              tax: 0,
              netSalary: 0,
              message: "",
            });
          }}
        >
          <Ionicons name="refresh-outline" color="dodgerblue" size={26} />
        </TouchableOpacity>
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
