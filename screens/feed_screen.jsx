import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import MovieRecs from "../components/movierecs.component";

export default FeedScreen = ({ navigation, route }) => {
    const { userData } = useContext(UserContext);
 
    return (
        <SafeAreaView style={styles.body}>
            <>
                <Text style={styles.title}>Hello {userData.username}! Here is your feed!</Text>
                <MovieRecs searchWord={"test"}></MovieRecs>
            </>
        </SafeAreaView>
    );
};
