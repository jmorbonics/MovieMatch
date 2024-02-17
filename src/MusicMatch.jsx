import React, { useState } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { api } from "../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import LoginMenu from "./LoginMenu";


export default MusicMatchApp = () => {
    const [username, setUsername] = useState(""); // TODO: store more persistently?
    const loggedIn = username.length > 0;

    const userData = useQuery(api.functions.getUserData, {username: username});

    const val = userData !== undefined && userData !== null ? userData.testVal : 0;

    const setUserData = useMutation(api.functions.setUserData);

    function handleButtonPress() {
        if (userData === null) {
            
        }
    }


    return (
        <SafeAreaView style={styles.body}>
            {
                !loggedIn ?
                <LoginMenu
                    onSubmitUsername = {(text) => setUsername(text)}
                />
                : <>
                    <Text style={styles.title}>Hello {username}!</Text>
                    <Text style={styles.title}>Your var is {val}!</Text>
                    <Button
                        onPress={() => setUserData({ username: username, testVal: val+1 } )}
                        title="Increment!"
                    />
                </>
            }
        </SafeAreaView>
    );
};
