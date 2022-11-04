import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { DataTable } from "react-native-paper";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";
import HistoryStyles from "../styles/HistoryStyles";

function History(email) {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getCalculations(email.email);
  }, [isFocused]);

  const getCalculations = async (email) => {
    try {
      await axios
        .post("http://localhost:8080/history", {
          email: "asdf",
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

  const formatValue = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View style={HistoryStyles.container}>
      <Text style={HistoryStyles.heading}>Calculation History</Text>
      <DataTable>
        <DataTable.Header style={HistoryStyles.tableHeader}>
          <DataTable.Title
            textStyle={HistoryStyles.columnHeaderText}
            style={HistoryStyles.columnHeader}
          >
            Frequency
          </DataTable.Title>
          <DataTable.Title
            textStyle={HistoryStyles.columnHeaderText}
            style={HistoryStyles.columnHeader}
            numeric
          >
            Salary (R)
          </DataTable.Title>
          <DataTable.Title
            textStyle={HistoryStyles.columnHeaderText}
            style={HistoryStyles.columnHeader}
            numeric
          >
            Tax (R)
          </DataTable.Title>
          <DataTable.Title
            textStyle={HistoryStyles.columnHeaderText}
            style={{ flex: 1, paddingLeft: 10 }}
            numeric
          >
            Delete
          </DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {data !== null
            ? data.map((row, i) => {
                return (
                  <DataTable.Row key={i} style={HistoryStyles.dataRow}>
                    <DataTable.Cell
                      textStyle={HistoryStyles.dataCellText}
                      style={HistoryStyles.dataCell}
                    >
                      {row["Frequency"]}
                    </DataTable.Cell>
                    <DataTable.Cell
                      textStyle={HistoryStyles.dataCellText}
                      style={HistoryStyles.dataCell}
                      numeric
                    >
                      {formatValue(row["Salary"])}
                    </DataTable.Cell>
                    <DataTable.Cell
                      textStyle={HistoryStyles.dataCellText}
                      style={HistoryStyles.dataCell}
                      numeric
                    >
                      {row["Frequency"] === "Monthly"
                        ? formatValue(row["MonthlyTax"])
                        : formatValue(row["YearlyTax"])}
                    </DataTable.Cell>
                    <DataTable.Cell style={HistoryStyles.trash}>
                      <Ionicons
                        name="trash-outline"
                        color="black"
                        size={20}
                        style={{ justifyContent: "right" }}
                      />
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })
            : null}
        </ScrollView>
      </DataTable>
    </View>
  );
}

export default History;
