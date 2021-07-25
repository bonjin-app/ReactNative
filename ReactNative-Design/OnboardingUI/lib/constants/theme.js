import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const colors = {
    primary: '#FF5678',

    black: '#171717',
    white: '#FFF',
    background: '#FFF',
}

export const sizes = {
    base: 10,
    width,
    height,
}

const theme = {
    colors,
    sizes
};

export default theme;