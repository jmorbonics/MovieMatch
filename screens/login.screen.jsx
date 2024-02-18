import { View, Text, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import styles from "../styles";
import Button from '../components/button.component';

const LoginScreen = ({props, navigation}) => {
    const [username, setUsername] = useState('');
    const handleSubmit = () => {
        // Pass the username to the Movie screen
        navigation.navigate('Movie', { username: username });
    };

    return (
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
    );
};

export default LoginScreen

    // const [username, setUsername] = useState("");

    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     let regex = new RegExp(/^[a-zA-Z]\w*$/);
    //     if (regex.test(username)) {
    //         props.onSubmitUsername(username);
    //     } else {
    //         setUsername("");
    //     }
    // }