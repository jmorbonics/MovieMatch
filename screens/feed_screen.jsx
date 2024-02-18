import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import RandomMovieGenerator from "../components/randommovie.component";

export default FeedScreen = ({ navigation, route }) => {
    const { username, userData, setUserData } = useContext(UserContext);

    const [seed, setSeed] = useState(Math.random());
    
    let val = userData.testVal;
    if (val === undefined) {
        val = 0;
    }

    function handleIncrement() {
        setUserData({ username: username, data: {testVal: val + 1 }});
    }

    function handleRefresh() {
        setSeed(Math.random());
    }

    return (
        <SafeAreaView style={styles.body}>
            <>
                <Text style={styles.title}>Hello {username}!</Text>
                <Button
                    onPress={handleRefresh}
                    title="Refresh!"
                    style={styles.button}
                />
                <RandomMovieGenerator seed={seed} />
            </>
        </SafeAreaView>
    );
};
