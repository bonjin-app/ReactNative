import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import { LayoutChangeEvent, Platform, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

const LifeCycle = () => {
    useEffect(() => {
        console.log(Platform.OS, 'useEffect called')
        
        return () => {
            console.log(Platform.OS, 'useEffect finished')
        };
    })

    useLayoutEffect(() => {
        console.log(Platform.OS, 'useLayoutEffect called')

        return () => {
            console.log(Platform.OS, 'useLayoutEffect finished')
        };
    }, [])

    const onLayout = useCallback((e: LayoutChangeEvent) => {
        const { layout } = e.nativeEvent
        console.log(Platform.OS, 'onLayout called', layout)
    }, [])

    console.log(Platform.OS, 'render start')

    return (
        <View onLayout={ onLayout} style={[styles.view]}>
            <Text style={[styles.text]}>LifeCycle</Text>
        </View>
    )
}

export default LifeCycle

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.blue100
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
    }
})
