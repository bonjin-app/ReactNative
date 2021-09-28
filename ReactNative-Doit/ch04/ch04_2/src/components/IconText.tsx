import React, { ComponentProps, FC } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TouchableView, { TouchableViewProps } from './TouchableView'

export type IconTextProps = TouchableViewProps & ComponentProps<typeof Icon> & {
    text: number | string
    textStyle: StyleProp<TextStyle>
}

const IconText: FC<IconTextProps> = ({
    name, size, color, textStyle, text, ...touchableViewProps
}) => {
    return (
        <TouchableView {...touchableViewProps}>
            <Icon name={name} size={size} color={color} />
            <Text style={ textStyle}>{text}</Text>
        </TouchableView>
    )
}

export default IconText

const styles = StyleSheet.create({})
