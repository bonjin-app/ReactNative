import React, { FC, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

export type TopBarProps = {}

const TopBar: FC<TopBarProps> = ({ }) => {

    const add = useCallback(() => { }, [])
    const deleteAll = useCallback(() => { }, [])

    return (
        <View style={[styles.topBar]}>
            <Text style={[styles.textButton]} onPress={ add}>add</Text>
            <Text style={[styles.textButton]} onPress={ deleteAll}>delete all</Text>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        backgroundColor: Colors.lightBlue700
    },
    textButton: {
        fontSize: 20,
        color: 'white',
    }
})
