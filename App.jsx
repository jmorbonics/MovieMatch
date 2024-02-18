import { ConvexProvider, ConvexReactClient, useAction, useMutation, useQuery } from "convex/react";
import { CONVEX_URL } from "@env";
import React, { useEffect, useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/login_screen';
import FeedScreen from './screens/feed_screen';
import SearchScreen from './screens/search_screen';
import ResultScreen from './screens/result_screen';
import styles from "./styles"
import { api } from "./convex/_generated/api";
import { Text, SafeAreaView } from "react-native";



const Tab = createBottomTabNavigator();
export const UserContext = React.createContext(null);

function MovieMatchApp() {
  const [username, setUsername] = useState("");

  var userData = useQuery(api.functions.getUserData, { username: username});
  const setUserData = useMutation(api.functions.setUserData);

  if (userData === null) {
    // Defualt new user data
    userData = {username: username, testVal: 0};
  }

  return userData === undefined ? (
      <SafeAreaView style={styles.background}>
        <Text style={styles.loading}>Loading...</Text>
      </SafeAreaView>
    ) : (
      <UserContext.Provider value={{ username: username, setUsername: setUsername, userData: userData, setUserData: setUserData }}>
         {
          username.length == 0 ? (
            <LoginScreen />
          ) : (
            <NavigationContainer>
              <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen
                  name='Feed'
                  component={FeedScreen}
                  options={{ title: 'Feed' }}
                />
                <Tab.Screen
                  name='Search'
                  component={SearchScreen}
                  options={{ title: 'Search' }}
                />
                <Tab.Screen
                  name='Results'
                  component={ResultScreen}
                  options={{ title: 'Results' }}
                />
          
          </Tab.Navigator>
          
          )
          }
      </UserContext.Provider>
  );
}

export default function App() {
  const convex = new ConvexReactClient(CONVEX_URL, {
    // We need to disable this to be compatible with React Native
    unsavedChangesWarning: false,
  });

  return (
  <ConvexProvider client={convex}>
    <MovieMatchApp />
  </ConvexProvider>
  );
}
