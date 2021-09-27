import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'

const iconSize = 30
const iconColor = 'white'
const icons = ['home', 'table-search', 'face=profile-woman', 'account-settings']

const BottomBar = () => {
    const children = icons.map((name) => {
        return <Icon key={name} name={name} size={iconSize} color={ iconColor}/>
    })

    return (
        <View style={[styles.view]}>{children}</View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        backgroundColor: Colors.lightBlue500,
    }
})
