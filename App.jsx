import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CONVEX_URL } from "@env";
import React, { StrictMode } from "react";
import MusicMatchApp from "./src/MusicMatch";


export default App = () => {
  const convex = new ConvexReactClient(CONVEX_URL, {
    // We need to disable this to be compatible with React Native
    unsavedChangesWarning: false,
  });
  return (
    <StrictMode>
      <ConvexProvider client={convex}>
        <MusicMatchApp />
      </ConvexProvider>
    </StrictMode>
  );
};
