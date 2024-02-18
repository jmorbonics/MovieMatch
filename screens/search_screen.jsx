import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button, StyleSheet, TextInput, View } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";

const SearchScreen = ({ navigation, route }) => {
    const { username, userData, setUserData } = useContext(UserContext);
    const [text, setText] = useState('');
    const [searchval, setSearch] = useState('');
    

    const handleSubmit = async (event) => {
        setSearch(text);
    };

    
    if (searchval == "") {
        return (
            <SafeAreaView style={styles.body}>
                <>
                    <Text style={styles.title}>Hello {username}! Search for a Movie below:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        onSubmitEditing={handleSubmit}
                        value={text}
                        placeholder="Movie Title"
                    />
                </>
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.body}>
                <>
                    <Text style={styles.title}>Hello {username}! Searching for {searchval}:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        onSubmitEditing={handleSubmit}
                        value={text}
                        placeholder="Movie Title"
                    />
                </>
            </SafeAreaView>
        );
    }

};

export default SearchScreen