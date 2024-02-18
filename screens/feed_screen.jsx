import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import RandomMovieGenerator from "../components/randommovie.component";

export default FeedScreen = ({ navigation, route }) => {
    const { userData } = useContext(UserContext);

    const [seed, setSeed] = useState(Math.random());
 
    function handleRefresh() {
        setSeed(Math.random());
    }

    return (
        <SafeAreaView style={styles.body}>
            <>
                <Text style={styles.title}>Hello {userData.username}!</Text>
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
