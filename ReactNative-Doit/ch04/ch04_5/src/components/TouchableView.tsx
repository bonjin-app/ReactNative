import React, { ComponentProps, FC, ReactNode } from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>

export type TouchableViewProps = TouchableOpacityProps & {
    viewStyle?: StyleProp<ViewStyle>
}

const TouchableView: FC<TouchableViewProps> = ({children, viewStyle, ...touchableProps}) => {
    return (
        <TouchableOpacity {...touchableProps}>
            <View style={[viewStyle]}>{children}</View>
        </TouchableOpacity>
    )
}

export default TouchableView

const styles = StyleSheet.create({})
