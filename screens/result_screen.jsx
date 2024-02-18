import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button, View } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import MovieRecs from "../components/movierecs.component";
import SearchScreen from "../screens/search_screen";

export default ResultScreen = ({ navigation, route }) => {
    const { username, userData, setUserData } = useContext(UserContext);
    

    return (
        <SafeAreaView>
            <View>
                <Text>Top Movie Scroller</Text>
                <MovieRecs searchWord={"Spiderman"}/>
            </View>
        </SafeAreaView>
    );
};
