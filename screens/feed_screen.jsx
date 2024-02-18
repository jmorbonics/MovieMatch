import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import MovieView from "../components/movieview.component"

export default FeedScreen = ({ navigation, route }) => {
    const { userData } = useContext(UserContext);

    const [movieID, setMovieID] = useState(null);

    const handleRefresh = () => {
        //const rand = Math.floor(Math.random() * 10000000);
        //const id = "tt" + rand.toLocaleString('en-US', {minimumIntegerDigits: 7, useGrouping:false});
        const tempList = ["tt0111161", "tt0068646", "tt0071562", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0110912",
            "tt0060196", "tt0120737", "tt0137523", "tt0109830", "tt1375666", "tt0080684", "tt0167261", "tt0120815", "tt0073486",
            "tt2582802", "tt0209144", "tt6751668", "tt0407887", "tt1853728", "tt0482571", "tt0172495", "tt0114369", "tt0082971",
            "tt0910970", "tt0076759", "tt0361748", "tt0054215", "tt0120815", "tt0073486", "tt2582802", "tt0209144", "tt6751668",
            "tt0114369", "tt0082971", "tt0910970", "tt0076759", "tt0361748", "tt0054215", "tt8503618", "tt0253474", "tt0038650",
            "tt0088763", "tt0088763", "tt7286456", "tt0114814", "tt0110413", "tt0118799", "tt0102926", "tt0118799", "tt0102926",
            "tt0113277", "tt0120586", "tt0057012", "tt0407887", "tt1853728", "tt0482571", "tt0172495",
        ];
        const idx = Math.floor(Math.random() * tempList.length);
        const id = tempList[idx];

        setMovieID(id);
        console.log(id);
    }
    
    useEffect(handleRefresh, []);

    return (
        <SafeAreaView style={styles.body}>
            <>
                <Text style={styles.title}>Hello {userData.username}!</Text>
                <Button
                    onPress={handleRefresh}
                    title="Refresh!"
                    style={styles.button}
                />
                <MovieView movieID={movieID} />
            </>
        </SafeAreaView>
    );
};
