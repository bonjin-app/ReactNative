import React, { useCallback, useMemo, useRef, useState } from 'react'
import { findNodeHandle, Keyboard, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import type { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTheme } from 'react-native-paper'
import { useToggleTheme } from '../contexts'
import * as D from '../data'

const KeyboardAware = () => {
    const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
    const { dark, colors } = useTheme()
    const toggleTheme = useToggleTheme()

    const textInputRef = useRef<TextInput | null>(null)

    const setFocus = useCallback(() => {
        textInputRef.current?.focus()
    }, [textInputRef.current])

    const textInputStyle = useMemo(() => [
        styles.textInput,
        { color: colors.text, borderColor: colors.placeholder }
    ], [colors.text, colors.placeholder])

    const scrollViewRef = useRef<KeyboardAwareScrollView | null>(null)
    const scrollToInput = (reactNode: any) => {
        scrollViewRef.current?.scrollToFocusedInput(reactNode)
    }
    const autoFocus = useCallback(() => (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        scrollToInput(findNodeHandle(event.target))
    }, [])

    return (
        <View style={[styles.view, { backgroundColor: colors.surface }]}>
            <View style={[styles.topBar, { backgroundColor: colors.accent }]}>
                <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
                <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>dismiss keyboard</Text>
                <View style={{ flex: 1 }}></View>
                <Switch value={dark} onValueChange={toggleTheme} />
            </View>
            <KeyboardAwareScrollView contentContainerStyle={[styles.flex]} ref={scrollViewRef}>
                <View style={{ flex: 1 }}></View>
                <View style={[styles.textView]}>
                    <Text style={[styles.text, { color: colors.text }]}>email</Text>
                    <TextInput
                        style={textInputStyle}
                        value={person.email}
                        placeholder='enter your email'
                        onFocus={autoFocus}
                        onChangeText={(email) => setPerson((person) => ({ ...person, email }))}
                    />
                </View>
                <View style={[styles.textView]}>
                    <Text style={[styles.text, { color: colors.text }]}>name</Text>
                    <TextInput
                        ref={textInputRef}
                        style={textInputStyle}
                        value={person.name}
                        placeholder='enter your name'
                        onFocus={autoFocus}
                        onChangeText={(name) => setPerson((person) => ({ ...person, name }))}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default KeyboardAware

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
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
