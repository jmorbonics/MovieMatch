import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button, StyleSheet, TextInput, View } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import MovieRecs from "../components/movierecs.component";

const GroupsScreen = ({ navigation, route }) => {
    const { username, userData, setUserData } = useContext(UserContext);

    const [text, setText] = useState('');
    const [group, setGroup] = useState({ groupname: "", usernames: [] });
    

    const createGroup = async (event) => {
        setGroup({ groupname: text, username });
    };

    const joinGroup = async (event) => {
        // Query the group_data table to get the existing group data
        const existingGroups = await convex.query({
            find: 'group_data',
            where: { groupname: text }
        });
    
        // Assuming there is only one group with the given groupname
        if (existingGroups.length > 0) {
            const existingGroup = existingGroups[0];
            const updatedGroup = { ...existingGroup, usernames: [...existingGroup.usernames, username] };
            await convex.update('group_data', existingGroup.id, updatedGroup);
            setGroup(updatedGroup);
        }
    }

    
    if (group.groupname == "") {
        return (
            <SafeAreaView style={styles.body}>
                <>
                    <Text style={styles.title}>Hello {username}! Join a Group:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        onSubmitEditing={joinGroup}
                        value={text}
                        placeholder="Group Name"
                    />
                    <Text> </Text>
                    <Text> </Text>
                    <Text style={styles.title}>Or, Create Your Own:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        onSubmitEditing={createGroup}
                        value={text}
                        placeholder="Group Name"
                    />
                </>
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.body}>
                <>
                    {/* TODO: View members in your group here after joining/creating */}
                </>
            </SafeAreaView>
        );
    }

};

export default GroupsScreen