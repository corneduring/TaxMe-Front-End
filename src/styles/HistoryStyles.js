import { StyleSheet } from "react-native";

const HistoryStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: 50,
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontFamily: "Arial",
    fontWeight: "bold",
    marginBottom: 20,
    letterSpacing: 2,
  },
  tableHeader: {
    backgroundColor: "dodgerblue",
    paddingHorizontal: 10,
  },
  columnHeader: { flex: 2 },
  columnHeaderText: { color: "white" },
  dataCell: {
    flex: 2,
  },
  dataCellText: {
    fontSize: 12,
  },
  trash: {
    justifyContent: "flex-end",
  },
});

export default HistoryStyles;
