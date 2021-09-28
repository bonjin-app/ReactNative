import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-paper'

const MainNavigator = () => {
    const [index, setIndex] = useState<number>(0)
    const [routes] = useState([])

    const renderScene = BottomNavigation.SceneMap({

    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}

export default MainNavigator

const styles = StyleSheet.create({})
