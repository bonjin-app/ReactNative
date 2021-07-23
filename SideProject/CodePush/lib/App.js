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
            <Text>CodePush !!!</Text>
        </View>
    )
}

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_START,
    installMode: codePush.InstallMode.IMMEDIATE,
}

export default codePush(codePushOptions)(App)
