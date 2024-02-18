import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";

export default FeedScreen = ({ navigation, route }) => {
    const { username, userData, setUserData } = useContext(UserContext);
    
    let val = userData.testVal;
    if (val === undefined) {
        val = 0;
    }

    function handleIncrement() {
        setUserData({ username: username, data: {testVal: val + 1 }});
    }

    return (
        <SafeAreaView style={styles.body}>
            <>
                <Text style={styles.title}>Hello {username}!</Text>
                <Text style={styles.title}>Your var is {val}!</Text>
                <Button
                    onPress={handleIncrement}
                    title="Increment!"
                    style={styles.button}
                />
            </>
        </SafeAreaView>
    );
};
