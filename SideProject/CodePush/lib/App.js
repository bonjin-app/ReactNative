import React from 'react'
import { View, Text, Button } from 'react-native'
import codePush from 'react-native-code-push'

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

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_START,
    installMode: codePush.InstallMode.IMMEDIATE,
}

export default CodePush(codePushOptions)(App)
