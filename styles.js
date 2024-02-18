import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1, // Make sure the login screen fills the entire screen
    backgroundColor: "#222222", // Set background to black for the login screen
    justifyContent: "center",
    alignItems: "center",
  },
  titleapp: {
    fontSize: 50,
    letterSpacing: 1,
    color: '#AAA',
  },
  title: {
    backgroundColor: "#ffffff",
    fontSize: 36,
    padding: 5,
    marginTop: 20,
    borderWidth: 5,
    textAlign: "center",
  },
  loading: {
    backgroundColor: "#6e0202",
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
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    borderRadius: 15,
    margin: 10,
    color: '#777',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  label: {
    fontSize: 36,
    letterSpacing: 1,
    color: '#AAA',
  },
  movieLabel: {
    fontSize: 36,
    letterSpacing: 1,
    color: '#AAA',
    width: 266,
    flexShrink: 1,
  },
  div: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "black",
  },
});

export default styles;
