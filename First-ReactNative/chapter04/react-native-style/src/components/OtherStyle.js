import React from 'react'
import { View, Text } from 'react-native'
import { viewStyles, textStyles } from './styles'

const OtherStyle = () => {
    return (
        <View style={viewStyles.container}>
            <Text style={[textStyles.text, { color: 'green' }]}>Inline Styling - TEXT</Text>
            <Text style={[textStyles.text, textStyles.error]}>Inline Styling - Error</Text>
        </View>
    )
}

export default OtherStyle
