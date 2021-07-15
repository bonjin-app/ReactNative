import React from 'react'
import { Button, Text, View } from 'react-native';

const ButtonView = () => {
    return (
        <View
            style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Button Componenet</Text>
            <Button title="Button" onPress={() => alert('Click!!!')}></Button>
        </View>
    )
}

export default ButtonView
