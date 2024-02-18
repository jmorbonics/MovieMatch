import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import { load } from "@tensorflow-models/universal-sentence-encoder";

export default FeedScreen = ({ navigation, route }) => {
    const { username, userData, setUserData } = useContext(UserContext);
    
    let val = userData.testVal;
    if (val === undefined) {
        val = 0;
    }

    
    load().then(model => {
        // Embed an array of sentences.
        const sentences = [
          'Hello.',
          'How are you?'
        ];
        model.embed(sentences).then(embeddings => {
          // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
          // So in this example `embeddings` has the shape [2, 512].
          embeddings.print(true /* verbose */);
        });
      });

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
            </>
        </SafeAreaView>
    );
};
