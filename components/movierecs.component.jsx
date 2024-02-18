import { ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from "../styles";

const MovieRecs = ({ searchWord }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const getMovieRequest = async () => {
        const url = "http://www.omdbapi.com/?s=" + searchWord + "&apikey=3d71d1bb";
    
        try {
            const response = await fetch(url);
            const responseJson = await response.json();
    
            console.log(responseJson);
            setMovies(responseJson.Search);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };
    
    useEffect(() => {
        getMovieRequest();
    }, []);

    const handleMoviePress = (index) => {
        setSelectedMovie(movies[index]);
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
            {selectedMovie && (
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedMovie.Title}</Text>
                </View>
            )}
        </ScrollView>
    );
};

export default MovieRecs;