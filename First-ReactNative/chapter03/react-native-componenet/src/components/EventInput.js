import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import EventButton from './EventButton';

const EventInput = () => {
    const [text, setText] = useState('');
    // const _onChange = (event) => {
    //     setText(event.nativeEvent.text);
    // }

    const _onChangeText = (text) => setText(text);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <EventButton />
            <Text style={{ margin: 10, fontSize: 30 }}>text: {text}</Text>
            <TextInput style={{ borderWidth: 1, padding: 10, fontSize: 20 }} placeholder="Enter a text..." onChangeText={_onChangeText} />
        </View>
    )
}

export default EventInput
