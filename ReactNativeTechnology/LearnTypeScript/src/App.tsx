import React from "react";
import { Text } from "react-native";
import Profile from "./Profile";

const App = () => {
    return (
        <Profile name="John Doe">
            <Text>Hello World</Text>
        </Profile>
    );
};

export default App;
