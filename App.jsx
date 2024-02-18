import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CONVEX_URL } from "@env";
import React, { StrictMode, useState } from "react";
// import MusicMatchApp from "./src/MusicMatch";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/login.screen';
import MusicMatchApp from './screens/movie.screen';


const Stack = createNativeStackNavigator();

export default function App() {
  const convex = new ConvexReactClient(CONVEX_URL, {
    // We need to disable this to be compatible with React Native
    unsavedChangesWarning: false,
  });
  const [username, setUsername] = useState("");
  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Movie'
            component={MusicMatchApp}
            options={{ title: 'Movie' }}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ title: 'Login', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ConvexProvider>
  );
}

// export default App = () => {
//   const convex = new ConvexReactClient(CONVEX_URL, {
//     // We need to disable this to be compatible with React Native
//     unsavedChangesWarning: false,
//   });
//   return (
//     <StrictMode>
//       <ConvexProvider client={convex}>
//         <MusicMatchApp />
//       </ConvexProvider>
//     </StrictMode>
//   );
// };