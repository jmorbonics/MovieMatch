import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    flex: 1, // Make sure the login screen fills the entire screen
    backgroundColor: "#000000", // Set background to black for the login screen
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    backgroundColor: "#508cba",
    fontSize: 36,
    padding: 5,
    borderWidth: 5,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#cce',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});

export default styles;
