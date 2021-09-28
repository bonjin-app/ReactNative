import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { Colors, TextInput, useTheme } from 'react-native-paper'
import { useToggleTheme } from '../contexts'
import * as D from '../data'

const title = 'Input'
const Input = () => {
    const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
    const { dark, colors } = useTheme()
    const toggleTheme = useToggleTheme()

    return (
        <View style={[styles.view, { backgroundColor: colors.surface }]}>
            <View style={[styles.topBar, { backgroundColor: colors.accent }]}>
                <Text style={[styles.textButton]}>focus</Text>
                <Text style={[styles.textButton]}>dismiss keyboard</Text>
                <View style={{ flex: 1 }}></View>
                <Switch value={dark} onValueChange={toggleTheme} />
            </View>
            <View style={[styles.textView]}>
                <Text style={[styles.text, { color: colors.text }]}>email</Text>
                <TextInput
                    style={[styles.textInput, { color: colors.text, borderColor: colors.placeholder }]}
                    value={person.email}
                    placeholder='enter your email'
                    onChangeText={(email) => setPerson((person) => ({ ...person, email }))}
                />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        padding: 5
    },
    textButton: {
        marginLeft: 10,
        fontSize: 20
    },
    keyboardAvoidingView: {
        flex: 1,
        padding: 10,
    },
    textView: {
        padding: 5
    },
    text: {
        fontSize: 24,
    },
    textInput: {
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 5
    }
})
