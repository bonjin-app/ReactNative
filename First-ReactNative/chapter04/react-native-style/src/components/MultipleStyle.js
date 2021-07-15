import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const MultipleStyle = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { color: 'green' }]}>Inline Styling - Text</Text>
            <Text style={[styles.text, styles.error]}>Inline Styling - Error</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        padding: 10,
        fontSize: 26,
        fontWeight: '600',
        color: 'black'
    },
    error: {
        fontWeight: '400',
        color: 'red'
    }
})

export default MultipleStyle
