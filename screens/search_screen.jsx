import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button, StyleSheet, TextInput, View } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import MovieRecs from "../components/movierecs.component";

const SearchScreen = ({ navigation, route }) => {
    const { userData } = useContext(UserContext);
    const [text, setText] = useState('');
    const [searchval, setSearch] = useState("");
    

    const handleSubmit = async (event) => {
        setSearch(text);
        //<MovieRecs searchWord={searchval}></MovieRecs>
    };

    
    if (searchval == "") {
        return (
            <SafeAreaView style={styles.body}>
                <>
                    <Text style={styles.title}>Search for a movie below:</Text>
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
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        onSubmitEditing={handleSubmit}
                        value={text}
                        placeholder="Movie Title"
                    />
                    <Text></Text>
                    <Text style={styles.title}>Searching for {searchval}:</Text>
                    <MovieRecs searchWord={searchval}></MovieRecs>
                </>
            </SafeAreaView>
        );
    }

};

export default SearchScreen