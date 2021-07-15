import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'

const CustomButtonView = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 30,
                marginBottom: 10
            }}>
                My Button Component
            </Text>

            <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
            <CustomButton title="Button" onPress={() => alert('props')} />
            <CustomButton title="Button" onPress={() => alert('children')}>Children Props</CustomButton>
            <CustomButton onPress={() => alert('default')} />
        </View>
    )
}

export default CustomButtonView;