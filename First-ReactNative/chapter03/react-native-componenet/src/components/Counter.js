import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CustomButton from './CustomButton';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontSize: 30, margin: 10 }}>{count}</Text>
            <Text style={{ fontSize: 30, margin: 10 }}>{double}</Text>
            <CustomButton title="+1" onPress={() => {
                setCount(count + 1)
                setDouble(double + 2)
            }} />
            <CustomButton title="-1" onPress={() => {
                setCount(count - 1)
                setDouble(double - 2)
            }} />
        </View>
    )
}

export default Counter;
