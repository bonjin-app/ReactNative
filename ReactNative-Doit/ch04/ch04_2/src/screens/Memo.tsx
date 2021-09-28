import color from 'color'
import React, { useMemo } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'
import { useClock } from '../hooks'
import { createOrUse } from './createOrUse'
import Person from './Person'

const title = 'Memo'
const Memo = () => {
    const time = useClock()
    const people = useMemo(() => D.makeArray(2).map(D.createRandomPerson), [
        // time
    ])

    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>{title}</Text>
            <FlatList
                style={[styles.flatList]}
                data={people}
                renderItem={({ item }) => {
                    return <Person person={item} />
                }}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={() => <View style={ styles.itemSeparator}/>}
            />
        </View>
    )
}

export default Memo

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 5,
        backgroundColor: Colors.blue900,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    flatList: {
        width: '100%'
    },
    itemSeparator: {
        borderWidth: 1,
        borderColor: color(Colors.grey500).lighten(0.5).string(),
    }
})
