import { ScrollView, Image, View } from 'react-native';
import React, { useState } from 'react';
import styles from "../styles";


const FavoriteMovies = () => {
    const [movies, setMovies] = useState([
        {
            "Title": "The Princess Bride",
            "Year": "1987",
            "imdbID": "tt0093779",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzdiOTVjZmQtNjAyNy00YjA2LTk5ZTAtNmJkMGQ5N2RmNjUxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
        },
        {
            "Title": "Princess Mononoke",
            "Year": "1997",
            "imdbID": "tt0119698",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "The Princess and the Frog",
            "Year": "2009",
            "imdbID": "tt0780521",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNmJkZjk1OTUtNzQ3NC00M2I1LTgzNTQtYzk4MmMyNDk0MTY3XkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_SX300.jpg"
        },
        {
            "Title": "The Princess Diaries",
            "Year": "2001",
            "imdbID": "tt0247638",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "Title": "The Princess Diaries 2: Royal Engagement",
            "Year": "2004",
            "imdbID": "tt0368933",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODljNTU2ZGMtMWI5Yy00MGNkLTg2MTktN2NhZjY0NDcwMDhiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "Title": "The Tale of The Princess Kaguya",
            "Year": "2013",
            "imdbID": "tt2576852",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNThmMWMyMWMtOWRiNy00MGY0LTg1OTUtNjYzODg2MjdlZGU5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "Xena: Warrior Princess",
            "Year": "1995–2001",
            "imdbID": "tt0112230",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTdkYjA4YzAtMjNiZS00OTgyLTg5Y2ItNGIwZGQyMTUzNzFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "My Little Princess",
            "Year": "2010",
            "imdbID": "tt1725047",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjcxMjY1NjQxMF5BMl5BanBnXkFtZTcwMjI0MDY0NA@@._V1_SX300.jpg"
        },
        {
            "Title": "A Little Princess",
            "Year": "1995",
            "imdbID": "tt0113670",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDQzMGE5ODYtZDdiNC00MzZjLTg2NjAtZTk0ODlkYmY4MTQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "Title": "The Princess Switch",
            "Year": "2018",
            "imdbID": "tt8954732",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjYxMjEzOF5BMl5BanBnXkFtZTgwMjAwNDE3NjM@._V1_SX300.jpg"
        },
    ]);
    return (
        <ScrollView horizontal style={{ margin: 10 }}>
            {movies.map((movie, index) => (
                <View key={index} style={{ marginRight: 10 }}>
                    <Image
                        source={{uri: movie.Poster}}
                        style={{ width: 150, height: 225 }}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

export default FavoriteMovies;