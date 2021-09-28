import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import { useLayout } from '../hooks'

const LifeCycle = () => {
    const [layout, setLayout] = useLayout()

    return (
        <View onLayout={ setLayout} style={[styles.view]}>
            <Text style={[styles.text]}>LifeCycle</Text>
            <Text>layout: {JSON.stringify(layout, null, 2)}</Text>
        </View>
    )
}

export default LifeCycle

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.blue100
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
    }
})
