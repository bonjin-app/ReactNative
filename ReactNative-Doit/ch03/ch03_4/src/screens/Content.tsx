import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

const title = 'Content'
const Content = () => {
    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>{title}</Text>

            <View style={[{flex: 0, backgroundColor: Colors.red500}]}>
                <Text>flex: 0</Text>
            </View>
            <View style={[{flex: 1, backgroundColor: Colors.green500}]}>
                <Text>flex: 1</Text>
            </View>
            <View style={[{flex: 2, backgroundColor: Colors.purple500}]}>
                <Text>flex: 2</Text>
            </View>
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 5,
        backgroundColor: Colors.blue900,
    },
    text: {
        fontSize: 20,
        color: 'white',
    }
})
