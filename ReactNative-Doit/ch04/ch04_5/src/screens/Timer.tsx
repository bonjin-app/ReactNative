import React, { useCallback, useEffect, useState } from 'react'
import { Button, StyleSheet, ActivityIndicator, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'
import { useTimeout, useToggle } from '../hooks'

const Timer = () => {
    const [loading, toggleLoading] = useToggle(true)
    
    useTimeout(() => loading && toggleLoading(), 3000, [loading])

    return (
        <View style={[styles.view]}>
            <Text style={[styles.title]}>Timer</Text>
            <Text>laoding: {loading.toString()}</Text>
            
            <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'} />
            {loading && (
                <ActivityIndicator size='large' color={ Colors.deepPurple700}/>
            )}
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.yellow300,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    }
})
