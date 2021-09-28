import React, { useCallback, useRef, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Switch, useTheme } from 'react-native-paper'
import { useToggleTheme } from '../contexts'
import * as D from '../data'
import Person from './Person'

const Home = () => {
    const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()])
    const theme = useTheme()
    const toggleTheme = useToggleTheme()
    const add = useCallback(() => {
        setPeople((people) => [...people, D.createRandomPerson()])
    }, [])

    const removeAll = useCallback(() => {
        setPeople((notUsed) => [])
    }, [])

    const flatListRef = useRef<FlatList | null>(null)

    const onContentSizeChange = useCallback(() => flatListRef.current?.scrollToEnd(), [])

    return (
        <View style={[styles.view, { backgroundColor: theme.colors.surface }]}>
            <View style={[styles.topBar, { backgroundColor: theme.colors.accent }]}>
                <Text onPress={add} style={styles.text}>Add</Text>
                <Text onPress={removeAll} style={styles.text}>remove all</Text>
                <View style={{ flex: 1 }}></View>
                <Switch value={theme.dark} onValueChange={toggleTheme} />
            </View>

            <FlatList
                ref={flatListRef}
                data={people}
                renderItem={({ item }) => <Person person={item} />}
                keyExtractor={(item) => item.id}
                onContentSizeChange={onContentSizeChange}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    topBar: {
        flexDirection: 'row',
        padding: 5
    },
    text: {
        marginRight: 10,
        fontSize: 20
    }
})
