import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

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

const CustomButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8
        }} onPress={() => alert('click !!!')}>
            {/* <Text style={{ fontSize: 24 }}>{props.title}</Text> */}

            <Text style={{ color: 'white', fontSize: 24 }}>
                {props.children || props.title}
            </Text>
        </TouchableOpacity>
    )
}

CustomButton.defaultProps = {
    title: 'Button',
}

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default CustomButtonView
