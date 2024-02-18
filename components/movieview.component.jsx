import { ScrollView, Image, View, TouchableOpacity, Text, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from "../styles";

export default MovieView = (props) => {
    const { movieID } = props;
    const [isModalVisible, setModalVisible] = useState(false);
    const [movieInfo, setMovieInfo] = useState(null);

    const getMovieInfo = async ( movieID ) => {
        console.log("ID: " + movieID);
        const url = "http://www.omdbapi.com/?i=" + movieID + "&apikey=3d71d1bb";

        try {
            const information = await fetch(url);
            const infoJson = await information.json();
    
            console.log(infoJson);
            setMovieInfo(infoJson);
        } catch (error) {
            console.error("Error fetching movie information:", error);
        }
    };

    useEffect(() => {
        setMovieInfo(null);
        getMovieInfo(movieID);
    }, [movieID]);

    return (
    <View>{
        movieInfo ? (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => setModalVisible(true)}
            >
                <View>
                    <Image
                        source={{ uri: movieInfo.Poster }}
                        style={{ width: 333, height: 500 }}
                    />
                    <Text>{movieInfo.Title}</Text>
                </View>
            </TouchableOpacity>
        ) :
            <Text>Loading poster...</Text>
        }
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 5 }}>{
                    movieInfo ? (<>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{movieInfo.Title + " (" + movieInfo.Year + ")"}</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}>{movieInfo.Genre}</Text>
                        <Text style={{ fontSize: 20}}>{" "}</Text>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>{movieInfo.Plot}</Text>
                        <Text style={{ fontSize: 20}}>{" "}</Text>
                    </>) : (
                        <Text>Loading...</Text>
                    )
                }
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </View>
        </Modal>
</View>
    );
};
