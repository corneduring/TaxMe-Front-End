import { StyleSheet } from "react-native";

const SettingsStyles = StyleSheet.create({
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
  subHeading: {
    fontSize: 17,
    color: "black",
    fontFamily: "Arial",
    fontWeight: "bold",
    marginBottom: 12,
    letterSpacing: 1,
  },
  profileAttribute: {
    fontSize: 13,
    color: "black",
    fontFamily: "Arial",
    fontWeight: "bold",
    marginBottom: 12,
    letterSpacing: 1,
  },
  profileValue: {
    marginBottom: 12,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "dodgerblue",
    borderRadius: "9px",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SettingsStyles;
