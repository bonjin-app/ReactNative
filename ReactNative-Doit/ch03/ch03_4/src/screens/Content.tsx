import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

const avatars = D.makeArray(200).map((notUsed) => D.randomAvatarUrl())

const Content = () => {
    const children = avatars.map((avatarUrl, index) => {
        return (
            <View key={index} style={styles.avatarView}>
                <Image style={styles.avatar} source={{ uri: avatarUrl }}/>
            </View>
        )
    })
    return (
        <ScrollView contentContainerStyle={[styles.view]}>{children}</ScrollView>
    )
}

export default Content

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 5,
    },
    text: {
        fontSize: 20,
    },
    avatarView: {
        padding: 3,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
})
