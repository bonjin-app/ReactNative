import React, { useCallback, useRef, useState } from 'react'
import { Keyboard, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import { Colors, useTheme } from 'react-native-paper'
import { useToggleTheme } from '../contexts'
import * as D from '../data'

const title = 'Input'
const Input = () => {
    const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
    const { dark, colors } = useTheme()
    const toggleTheme = useToggleTheme()

    const textInputRef = useRef<TextInput | null>(null)

    const setFocus = useCallback(() => {
        textInputRef.current?.focus()
    }, [textInputRef.current])

    return (
        <View style={[styles.view, { backgroundColor: colors.surface }]}>
            <View style={[styles.topBar, { backgroundColor: colors.accent }]}>
                <Text style={[styles.textButton]}>focus</Text>
                <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>dismiss keyboard</Text>
                <View style={{ flex: 1 }}></View>
                <Switch value={dark} onValueChange={toggleTheme} />
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={[styles.textView]}>
                <Text style={[styles.text, { color: colors.text }]}>email</Text>
                <TextInput
                    ref={textInputRef}
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
