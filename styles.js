import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#1a4fa3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    flexShrink: 0,
  },
  title: {
    backgroundColor: "#508cba",
    fontSize: 36,
    padding: 5,
    borderWidth: 5,
    textAlign: "center",
  },
  login: {
    backgroundColor: "#d1d1d1",
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#c0c0c0",
    maxWidth: 130,
  },
  input: {
    backgroundColor: "#e2e2e2",
    // placeholderTextColor: "#858585",
    borderColor: "#c8c8c8",
    borderRadius: 7,
    borderWidth: 3,
    maxWidth: 100,
  },
  button: {
    backgroundColor: '#cce',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});

export default styles;
