import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CustomButton from './CustomButton';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontSize: 30, margin: 10 }}>{count}</Text>
            <CustomButton title="+1" onPress={() => setCount(count + 1)} />
            <CustomButton title="-1" onPress={() => setCount(count - 1)} />
        </View>
    )
}

export default Counter;
