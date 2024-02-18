import { ScrollView, Image, View, TouchableOpacity, Text, Modal, Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import styles from "../styles";
import { useMutation, useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { UserContext } from '../App';

export default MovieView = (props) => {
    const { userData } = useContext(UserContext);

    const { movieID } = props;
    const [isModalVisible, setModalVisible] = useState(false);
    const [movieInfo, setMovieInfo] = useState(null);
    
    const liked = userData.favorites.includes(movieID);

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
        setMovieInfo(null);
        getMovieInfo(movieID);
    }, [movieID]);

    const setFavorites = useMutation(api.functions.setFavorites);

    const toggleLiked = async () => {
        let newFavorites = [...userData.favorites];
        if (!liked) {
            newFavorites = newFavorites.concat(movieID);
        } else {
            var idx = newFavorites.indexOf(movieID);
            if (idx > -1) {
                newFavorites.splice(idx, 1);
            }
        }
        setFavorites({id: userData._id, favorites: newFavorites});
    };

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
                        style={{ width: 266, height: 400 }}
                    />
                    <Text style={styles.movieLabel}>{movieInfo.Title + (liked ? " ❤️" : "")}</Text>
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{movieInfo.Title + " (" + movieInfo.Year + ")" + (liked ? " ❤️" : "")}</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}>{movieInfo.Genre}</Text>
                        <Text style={{ fontSize: 20}}>{" "}</Text>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>{movieInfo.Plot}</Text>
                        <Text style={{ fontSize: 20}}>{" "}</Text>
                    </>) : (
                        <Text>Loading...</Text>
                    )
                }
                    <Button title={!liked ? "Like" : "Unlike"} style={{ width: 50 }} onPress={toggleLiked} />
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </View>
        </Modal>
</View>
    );
};
