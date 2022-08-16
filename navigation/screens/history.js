import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";
import { useIsFocused } from "@react-navigation/native";

function History(email) {
  const [d, setData] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    getCalculations(email.email);
  }, [isFocused]);

  const getCalculations = async (email) => {
    try {
      await axios
        .post("http://localhost:8080/history", {
          email: email,
        })
        .then((val) => {
          setData(val.data);
        })
        .catch((err) => {
          console.log("Error: " + err);
        });
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const deleteCalculation = async (id, index) => {
    try {
      await axios
        .post("http://localhost:8080/delete", {
          calculationID: id,
        })
        .then((val) => {
          if (!val.data) {
            Alert.alert("Error!", "Couldn't delete the selected calculation!");
          } else {
            setData(d.filter((row) => row.CalculationID !== id));
          }
        })
        .catch((err) => {
          console.log("Error: " + err);
        });
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const formatValue = (n) => {
    let number = n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return number.replaceAll(",", " ");
  };

  const getDate = (timeStamp) => {
    let date = timeStamp.split("T")[0];
    let time = timeStamp.split("T")[1].split(".")[0];

    let message =
      "Are you sure you want to delete this calculation made on " +
      date +
      " at " +
      time +
      "?";

    return message;
  };

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Delete</DataTable.Title>
        <DataTable.Title>Frequency</DataTable.Title>
        <DataTable.Title numeric>Income (R)</DataTable.Title>
        <DataTable.Title numeric>Tax</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
        {d !== null
          ? d.map((row, i) => {
              return (
                <DataTable.Row key={i}>
                  <DataTable.Cell>
                    <Ionicons
                      name="trash-outline"
                      color="black"
                      size={22}
                      onPress={() => {
                        let message = getDate(row["Time"]);
                        Alert.alert("Warning!", message, [
                          {
                            text: "Yes",
                            onPress: () => {
                              deleteCalculation(row["CalculationID"], i);
                            },
                          },
                          {
                            text: "No",
                            onPress: () => {
                              return;
                            },
                          },
                        ]);
                      }}
                    />
                  </DataTable.Cell>
                  <DataTable.Cell>{row["Frequency"]}</DataTable.Cell>
                  <DataTable.Cell numeric>
                    {formatValue(row["Salary"])}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    {row["Frequency"] === "Monthly"
                      ? formatValue(row["Tax"] / 12)
                      : formatValue(row["Tax"])}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })
          : null}
      </ScrollView>
    </DataTable>
  );
}

const styles = StyleSheet.create({
  trash: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default History;
