import { View, Text, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from "react";
import styles from "../styles";
import Button from '../components/button.component';
import { UserContext } from '../App';

const LoginScreen = ({props, navigation}) => {
    const [text, setText] = useState('');
    const { username, setUsername } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let regex = new RegExp(/^[a-zA-Z]\w*$/);
        if (regex.test(text)) {
            setUsername(text);
        } else {
            setText("");
        }
    };

    return (
        <View style={styles.login}>
            <Text>Login:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                onSubmitEditing={handleSubmit}
                value={text}
                placeholder="Username"
            />

            <Button
              title='Submit'
              onPress={handleSubmit}
              style={styles.button}
            />
            <StatusBar style='auto' />
        </View>
    );
};

export default LoginScreen

    // const [username, setUsername] = useState("");
