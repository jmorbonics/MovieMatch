import React, { useState, useEffect, useContext } from "react";
import { Text, SafeAreaView, Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import styles from "../styles";
import { UserContext } from "../App";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const GroupJoinCreate = () => {
    const { userData } = useContext(UserContext);

    const [joinText, setJoinText] = useState("");
    const [createText, setCreateText] = useState("");

    const addToGroup = useMutation(api.functions.addToGroup);
    const createGroup = useMutation(api.functions.createGroup);
    const isValidID = useQuery(api.functions.isValidGroupID, {id: joinText});

    const handleJoinGroup = async (event) => {
        event.preventDefault();
        if (isValidID) {
            addToGroup({userID: userData._id, groupID: joinText});
        }
        setJoinText("");
    };

    const handleCreateGroup = async (event) => {
        event.preventDefault();
        let regex = new RegExp(/^[a-zA-Z0-9 ]+$/);
        console.log("ID: " + userData._id);
        if (regex.test(createText)) {
            createGroup({userID: userData._id, groupname: createText});
        }
        setCreateText("");
    };

    return (<>
        <Text style={styles.title}>Join a Group:</Text>    
        <TextInput
            style={styles.input}
            onChangeText={setJoinText}
            onSubmitEditing={handleJoinGroup}
            value={joinText}
            placeholder="Group ID"
        />
        <Text style={styles.title}>Create a Group:</Text>
        <TextInput
            style={styles.input}
            onChangeText={setCreateText}
            onSubmitEditing={handleCreateGroup}
            value={createText}
            placeholder="Group name"
        />
    </>);
};

const GroupMenu = (props) => {
    const { userData } = useContext(UserContext);
    const { groupData } = props;

    const members = useQuery(api.functions.getUserDataList, {list: groupData.members});

    return (
    <>
        <View style={styles.groupContainer}>
            <Text style={styles.groupTitle}>Group: {groupData.groupname}</Text>
            <Text style={styles.groupInfo}>Group ID: {userData.groupID}</Text>

            <View style={styles.membersContainer}>
                <Text style={styles.membersTitle}>Members:</Text>
                <FlatList
                    data={members}
                    keyExtractor={(item) => item?._id}
                    renderItem={({ item }) => (
                        <Text style={styles.memberName}>{item?.username || "Loading..."}</Text>
                    )}
                />
            </View>
            <Text style={styles.groupInfo}>Add members to your group using your unique group ID! </Text>
            <Text style={styles.groupInfo}>Group members can see your favorite movies and send you in-app movie recommendations.</Text>
                        
        </View>
    </>);
}

const GroupsScreen = ({ navigation, route }) => {
    const { userData } = useContext(UserContext);
    const groupData = useQuery(api.functions.getGroupData, {groupID: userData.groupID});
    
    return (
        <SafeAreaView style={styles.body}>{
            userData.groupID === undefined ? (
                <GroupJoinCreate />
            ) : groupData === undefined ? (
                <Text style={styles.loading}>Loading...</Text>
            ) : (
                <GroupMenu groupData={groupData} />
        )}</SafeAreaView>
    );
};

export default GroupsScreen