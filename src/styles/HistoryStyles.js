import { StyleSheet } from "react-native";

const HistoryStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 50,
    alignItems: "center",
    paddingHorizontal: 0,
  },
  heading: {
    fontSize: 22,
    fontFamily: "Arial",
    fontWeight: "400",
    marginBottom: 20,
    letterSpacing: 1,
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
