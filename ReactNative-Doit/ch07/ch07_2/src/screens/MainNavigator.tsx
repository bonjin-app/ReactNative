import React from 'react'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeLeft" component={HomeLeft} />
            <Stack.Screen name="HomeRight" component={HomeRight} />
        </Stack.Navigator>
    )
}

export default MainNavigator
