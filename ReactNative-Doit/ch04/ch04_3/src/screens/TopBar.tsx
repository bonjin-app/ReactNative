import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

export type TopBarProps = {
    setPeople: Dispatch<SetStateAction<D.IPerson[]>>
}

const TopBar: FC<TopBarProps> = ({ setPeople }) => {

    const add = useCallback(() => {
        setPeople((prevPeople) => [D.createRandomPerson(), ...prevPeople])
    }, [])

    const deleteAll = useCallback(() => {
        setPeople((notUsed) => [])
    }, [])

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
