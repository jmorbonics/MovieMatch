import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";

export default FeedScreen = ({ navigation, route }) => {
    const { username, userData, setUserData } = useContext(UserContext);
    

    return (
        <SafeAreaView style={styles.body}>
            <>
                <Text style={styles.title}>Hello {username}!</Text>
                <Text style={styles.title}>Search!</Text>
            </>
        </SafeAreaView>
    );
};
