import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

const EventButton = () => {
    const _onPressIn = () => console.log('_onPressIn !!!\n');
    const _onPressOut = () => console.log('_onPressOut !!!\n');
    const _onPress = () => console.log('_onPress !!!\n');
    const _onLongPress = () => console.log('_onLongPress !!!\n');

    return (
        <TouchableOpacity style={{
            backgroundColor: '#f1c40f',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
            delayLongPress={1000}
            onPress={_onPress}
            onPressIn={_onPressIn}
            onPressOut={_onPressOut}
            onLongPress={_onLongPress}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>Press</Text>

        </TouchableOpacity>
    )
}

export default EventButton
