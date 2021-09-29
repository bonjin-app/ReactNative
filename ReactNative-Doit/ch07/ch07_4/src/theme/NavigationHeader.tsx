import React, { FC, ReactNode } from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, View } from "./navigation";

export type Props = {
    title?: string
    Left?: () => ReactNode
    Right?: () => ReactNode
    viewStyle?: StyleProp<ViewStyle>
    titleStyle?: StyleProp<TextStyle>
}

export const NavigationHeader: FC<Props> = ({
    title,
    Left,
    Right,
    viewStyle,
    titleStyle
}) => {

    return (
        <View style={[styles.view, viewStyle]}>
            {Left && Left()}
            <View style={styles.flex}>
                <Text style={[styles.title, titleStyle]}>
                    {title}
                </Text>
            </View>
            {Right && Right()}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },
    flex: {
        flex: 1,
        backgroundColor: 'transparent'
    }
})