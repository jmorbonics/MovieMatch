import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from "react";
import styles from "../styles";
import Button from '../components/button.component';
import bgmovie from '../assets/bgmovie.png';

// <bgmovie source={bgmovie} style={styles.bgmovie}>
//   {/* Your login screen content goes here */}
// </bgmovie>
import { UserContext } from '../App';

const LoginScreen = (props) => {
    const [text, setText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        let regex = new RegExp(/^[a-zA-Z]\w*$/);
        if (regex.test(text)) {
            props.handleLogin(text);
        } else {
            setText("");
        }
    };

    return (
        <SafeAreaView style={styles.background}>
            <Text style={styles.label}>Login:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                onSubmitEditing={handleSubmit}
                value={text}
                placeholder="Username"
            />

            <Button
              title='Log In'
              onPress={handleSubmit}
              style={styles.button}
            />
            <StatusBar style='auto' />
        </SafeAreaView>
    );
};

export default LoginScreen

    // const [username, setUsername] = useState("");
