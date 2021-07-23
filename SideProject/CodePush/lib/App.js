import React, { useEffect } from 'react'
import { View, Text, AppState, Button } from 'react-native'
import CodePush from 'react-native-code-push'

const App = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>진승오 바보</Text>
            <Button onPress={() => alert('승오 바보다!')} title="Click"/>
        </View>
    )
}

const _codePushOptions = {
    checkFrequency: CodePush.CheckFrequency.ON_APP_START,
    installMode: CodePush.InstallMode.IMMEDIATE,
}

export default CodePush(_codePushOptions)(App)
