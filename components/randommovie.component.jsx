import { ScrollView, Image, View, TouchableOpacity, Text, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from "../styles";
import MovieView from "./movieview.component.jsx"

const RandomMovieGenerator = (props) => {
    const [stringList, setStringList] = useState(['tt0028723', 'tt0428783', 'tt0042878', 'tt0142856', 'tt1517268', 'tt0426955']);

    const randomIndex = Math.floor(props.seed * stringList.length);


    return (
        <MovieView movieID={stringList[randomIndex]} />
    );
};

export default RandomMovieGenerator;