import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  logo: {
    width: "100%",
  },
  modal: {
    width: "100%",
    height: "71%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: "41px",
    borderTopRightRadius: "41px",
    paddingHorizontal: 50,
    paddingVertical: 35,
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    color: "#4a92ff",
    fontFamily: "Arial",
    fontWeight: "600",
    marginBottom: 15,
    marginTop: 0,
  },
  subHeading: {
    fontSize: 15,
    fontFamily: "Arial",
    fontWeight: "400",
    marginBottom: 20,
    marginTop: 0,
  },
  textLabel: {
    fontSize: 15,
  },
  textBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0,0,0, 0.4)",
    borderWidth: 0.8,
    borderRadius: 10,
    padding: 0,
    width: "100%",
    height: 45,
    marginBottom: 13,
  },
  icon: {
    padding: 10,
    height: 40,
  },
  textBox: {
    color: "#424242",
    fontWeight: "200",
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "dodgerblue",
    borderRadius: "9px",
  },
});

export default GlobalStyles;
