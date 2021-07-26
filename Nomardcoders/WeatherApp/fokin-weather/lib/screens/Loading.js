import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA',
    },
    text: {
        color: '#2C2C2C',
        fontSize: 30,
    }
})
