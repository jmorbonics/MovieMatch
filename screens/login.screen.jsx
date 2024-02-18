import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import styles from "../styles";
import Button from '../components/button.component';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (navigation) {
      navigation.navigate('Movie', { username: username });
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.login}>
          <Text>Login:</Text>
          <TextInput
              style={styles.input}
              onChangeText={(text) => setUsername(text)}
              onSubmitEditing={handleSubmit}
              value={username}
              placeholder="Username"
          />

          <Button
            title='Go to Movie'
            onPress={handleSubmit}
            style={styles.button}
          />
          <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;