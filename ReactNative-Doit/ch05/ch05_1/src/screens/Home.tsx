import Color from 'color'
import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { Colors, useTheme } from 'react-native-paper'
import { useToggleTheme } from '../contexts'
import * as D from '../data'

const Home = () => {
    const { dark, colors, fonts } = useTheme()
    const toggleTheme = useToggleTheme()

    return (
        <View style={[styles.view, { backgroundColor: colors.background }]}>
            <View style={[styles.bar, { backgroundColor: colors.primary }]}>
                <Text style={[styles.text, { color: colors.text }, fonts.medium]}>TopBar</Text>
                <View style={[{ flex: 1 }]} />
                <Switch value={dark} onValueChange={toggleTheme} />
            </View>
            <View style={styles.content}>
                <Text style={[styles.text, { color: colors.text }, fonts.regular]}>Welcome to Context world!</Text>
            </View>
            <View style={[styles.bar, { backgroundColor: colors.accent }]}>
                <Text style={[styles.text, { color: colors.text }, fonts.light]}>
                    BottomBar
                </Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 5,
        backgroundColor: Colors.blue900,
    },
    bar: {
        height: 50,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
    }
})
