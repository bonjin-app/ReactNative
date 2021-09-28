import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-paper'
import AutoFocus from './AutoFocus'
import Home from './Home'
import Input from './Input'
import KeyboardAvoid from './KeyboardAvoid'
import KeyboardAware from './KeyboardAware'

const MainNavigator = () => {
    const [index, setIndex] = useState<number>(0)
    const [routes] = useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'input', title: 'Input', icon: 'apple-keyboard-caps' },
        { key: 'avoid', title: 'Avoid', icon: 'keyboard-variant' },
        { key: 'aware', title: 'Aware', icon: 'keyboard-settings-outline' },
        { key: 'auto', title: 'Auto', icon: 'home-automation' },
    ])

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        input: Input,
        avoid: KeyboardAvoid,
        aware: KeyboardAware,
        auto: AutoFocus
    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}

export default MainNavigator

const styles = StyleSheet.create({})
