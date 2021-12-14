import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    name: string;
    isActive?: boolean;
    image?: string;
    children: React.ReactNode;
}

const Profile = ({ name, isActive, image = "https://picsum.photos/200", children }: Props) => {
    return (
        <View style={isActive && styles.activeStyle}>
            <Text>{name}</Text>
            <Text>{children}</Text>
        </View>
    );
};

// Default Value
// Profile.defaultProps = {
//     image: "https://picsum.photos/200",
// };

export default Profile;

const styles = StyleSheet.create({
    activeStyle: {
        backgroundColor: "yellow",
    },
});
