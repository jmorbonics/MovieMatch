import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../styles";

export default LoginMenu = (props) => {
    const [username, setUsername] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        let regex = new RegExp(/^[a-zA-Z]\w*$/);
        if (regex.test(username)) {
            props.onSubmitUsername(username);
        } else {
            setUsername("");
        }
    }

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
        </View>
    );
};
