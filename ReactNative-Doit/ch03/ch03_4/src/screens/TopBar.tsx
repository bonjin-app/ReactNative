import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'

const name = D.randomName()
const avatarUrl = D.randomAvatarUrl(name)

const TopBar = () => {
    return (
        <View style={[styles.view]}>
            <Image style={styles.avatar} source={{ uri: avatarUrl }} />
            <View style={styles.centerView}>
                <Text style={[styles.text]}>{name}</Text>
            </View>
            <Icon name="menu" size={24} color='white'/>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: Colors.blue900,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    centerView: {
        flex: 1,
    }
})
