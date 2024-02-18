import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";

export default FeedScreen = ({ navigation, route }) => {
    const { userData } = useContext(UserContext);
 
    return (
        <SafeAreaView style={styles.body}>
            <>
                <Text style={styles.title}>Hello {userData.username}!</Text>
                <Text style={styles.title}>The feed is not yet implemented!</Text>
            </>
        </SafeAreaView>
    );
};
