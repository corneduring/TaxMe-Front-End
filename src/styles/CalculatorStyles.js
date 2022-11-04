import { StyleSheet } from "react-native";

const CalculatorStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 50,
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 22,
    color: "black",
    fontFamily: "Arial",
    fontWeight: "bold",
    marginBottom: 31,
    letterSpacing: 2,
  },
  taxContainer: {
    justifyContent: "space-between",
  },
  subHeading: {
    fontSize: 15,
    fontFamily: "Arial",
    fontWeight: "bold",
    marginBottom: 15,
  },
  taxValue: {
    fontSize: 15,
    marginBottom: 20,
  },
  textLabel: {
    fontSize: 15,
    marginBottom: 15,
  },
  textBox: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: "9px",
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    marginTop: 15,
  },
  resetButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "dodgerblue",
    borderRadius: "9px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CalculatorStyles;
