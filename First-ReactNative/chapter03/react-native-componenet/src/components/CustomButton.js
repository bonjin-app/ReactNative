import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const CustomButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8
        }} onPress={() => props.onPress()}>
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

export default CustomButton
