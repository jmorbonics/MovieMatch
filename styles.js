import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1, // Make sure the login screen fills the entire screen
    backgroundColor: "#172a69", // Set background to black for the login screen
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
  loading: {
    backgroundColor: "#d3d3d3",
    fontSize: 28,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#454545",
    padding: 5,
  },
  input: {
    height: 40,
    width: 200,
    fontSize: 30,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    placeholderTextColor: '#CCC',
  },
  button: {
    backgroundColor: '#694ca8',
    borderRadius: 8,
    padding: 10,
    borderRadius: 15,
    margin: 10,
    color: '#777',
    borderWidth: 3,
    borderColor: '#482e80',
  },
  label: {
    fontSize: 36,
    letterSpacing: 1,
    color: '#AAA',
  },
});

export default styles;
