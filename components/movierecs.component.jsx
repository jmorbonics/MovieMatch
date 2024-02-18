import { ScrollView, Image, View, TouchableOpacity, Text, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from "../styles";

const MovieRecs = ({ searchWord }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    const [movieInfo, setMovieInfo] = useState(null);

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
        getMovieRequest();
    }, [searchWord]);

    useEffect(() => {
        if (selectedMovie) {
            getMovieInfo(selectedMovie.imdbID);
        }
    }, [selectedMovie]);

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
                            style={{ width: 333, height: 500 }}
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{selectedMovie?.Title + " (" + selectedMovie?.Year + ")"}</Text>
                        {movieInfo && <Text style={{ fontSize: 14, textAlign: 'center' }}>{movieInfo.Genre}</Text>}
                        <Text style={{ fontSize: 20}}>{" "}</Text>
                        {movieInfo && <Text style={{ fontSize: 18, textAlign: 'center' }}>{movieInfo.Plot}</Text>}
                        <Text style={{ fontSize: 20}}>{" "}</Text>
                        {movieInfo && <Text style={{ fontSize: 14, textAlign: 'center' }}>{/*movieInfo.Ratings[1].Source + ": " + movieInfo.Ratings[1].Value*/}</Text>}
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default MovieRecs;