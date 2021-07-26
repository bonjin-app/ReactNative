import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window');

const Player = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Player

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        height: height,
        maxHeight: 500,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    artist: {
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'capitalize',
    }
})
