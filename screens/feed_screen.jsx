import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import MovieRecs from "../components/movierecs.component";

export default FeedScreen = ({ navigation, route }) => {
    const { username, userData, setUserData } = useContext(UserContext);
    val = "012"

    function handleIncrement() {
        setUserData({ username: username, data: {testVal: val + 1 }});
    }

    return (
        <SafeAreaView style={styles.body}>
            <>
                <Text style={styles.title}>Hello {username}
                Here is your feed!</Text>
                {/* <Text style={styles.title}>Your var is {val}!</Text>
                <Button
                    onPress={handleIncrement}
                    title="Increment!"
                    style={styles.button}
                /> */}
                <MovieRecs searchWord={val}></MovieRecs>
            </>
        </SafeAreaView>
    );
};
