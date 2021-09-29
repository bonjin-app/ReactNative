import React, { useMemo } from 'react'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { Colors } from 'react-native-paper'
import { useNavigationHorizontalInterpolator } from '../hooks'

const Stack = createStackNavigator()

const HomeNavigator = () => {
    const interpolator = useNavigationHorizontalInterpolator()
    const leftOptions = useMemo<StackNavigationOptions>(() => ({
        gestureDirection: 'horizontal-inverted',
        cardStyleInterpolator: interpolator
    }), [])

    const rightOptions = useMemo<StackNavigationOptions>(() => ({
        gestureDirection: 'horizontal',
        cardStyleInterpolator: interpolator
    }), [])

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeLeft" component={HomeLeft} options={leftOptions} />
            <Stack.Screen name="HomeRight" component={HomeRight} options={rightOptions} />
        </Stack.Navigator>
    )
}

export default HomeNavigator
