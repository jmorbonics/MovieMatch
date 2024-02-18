import { ScrollView, Image, View, TouchableOpacity, Text, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from "../styles";

const MovieRecs = ({ searchWord }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);

    const getMovieRequest = async () => {
        setLoading(true);
        const url = "http://www.omdbapi.com/?s=" + searchWord + "&apikey=3d71d1bb";
    
        try {
            const response = await fetch(url);
            const responseJson = await response.json();
    
            console.log(responseJson);
            setMovies(responseJson.Search);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
        setLoading(false);
        }
    };
    
    useEffect(() => {
        getMovieRequest();
    }, [searchWord]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    const handleMoviePress = (index) => {
        setSelectedMovie(movies[index]);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedMovie(null);
    };

    return (
        <ScrollView horizontal style={{ margin: 10 }}>
            {movies.map((movie, index) => (
                <TouchableOpacity
                    key={index}
                    style={{ marginRight: 10 }}
                    onPress={() => handleMoviePress(index)}
                >
                    <View style={{ margin: 10 }}>
                        <Image
                            source={{ uri: movie.Poster }}
                            style={{ width: 266, height: 400 }}
                        />
                        <Text>{movie.Title}</Text>
                        <Text>{searchWord}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedMovie?.Title}</Text>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>{selectedMovie?.Year}</Text>
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default MovieRecs;