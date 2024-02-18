import { ScrollView, Image, View, TouchableOpacity, Text, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from "../styles";

const RandomMovieGenerator = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [movieInfo, setMovieInfo] = useState(null);

    const [stringList, setStringList] = useState(['tt0028723', 'tt0428783', 'tt0042878', 'tt0142856', 'tt1517268', 'tt0426955']);

    const randomIndex = Math.floor(props.seed * stringList.length);

    const getMovieInfo = async ( movieID ) => {
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
        getMovieInfo(stringList[randomIndex]);
    }, [randomIndex]);


    const handleMoviePress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            {movieInfo && (
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={handleMoviePress}
                >
                    <View>
                        <Image
                            source={{ uri: movieInfo?.Poster }}
                            style={{ width: 333, height: 500 }}
                        />
                        <Text>{movieInfo.Title}</Text>
                    </View>
                </TouchableOpacity>
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
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
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default RandomMovieGenerator;