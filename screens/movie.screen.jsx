import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { api } from "../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import Taskbar from '../components/taskbar.component';


export default MovieScreen = ({ navigation, route }) => {
    const { username } = route.params;
    const [val, setVal] = useState(0);

    const userData = useQuery(api.functions.getUserData, { username: username });

    useEffect(() => {
        if (userData !== undefined && userData !== null) {
            setVal(userData.testVal);
        } else {
            setVal(0);
        }
    }, [userData]);

    const setUserData = useMutation(api.functions.setUserData);

    function handleIncrement() {
        setUserData({ username: username, testVal: val + 1 });
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
                <Button
                    title='Go to Login'
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                />
            </>
        </SafeAreaView>
    );
};

