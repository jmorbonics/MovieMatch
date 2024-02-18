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
    
    useEffect(() => {
        getMovieRequest();
    }, [searchWord]);

    return loading ? (
        <Text>Loading...</Text>
        ) : (
        <ScrollView horizontal style={{ margin: 10 }}>
            {movies.map((movie, index) => (
                <MovieView key={index} movieID={movie.imdbID} />
            ))}
        </ScrollView>
    );
};

export default MovieRecs;