import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome'
import Login from './Login'
import SignUp from './SignUp'
import HomeNavigator from './HomeNavigator'

import type { RouteProp, ParamListBase } from '@react-navigation/native'
import { Colors } from 'react-native-paper'

type TabBarIconProps = {
    focused: boolean
    color: string
    size: number
}

const icons: Record<string, string[]> = {
    HomeNavigator: ['home-circle', 'home-circle-outline']
}

const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
    return {
        headerShown: false,
        tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
            const { name } = route
            const focusedSize = focused ? size + 6 : size
            const focusedColor = focused ? Colors.lightBlue500 : color
            const [icon, iconOutline] = icons[name]
            const iconName = focused ? icon : iconOutline
            return <Icon name={iconName} size={size} color={color} />
        }
    }
}

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="HomeNavigator" component={HomeNavigator} options={{ tabBarLabel: 'Home', tabBarBadge: 3 }} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    view: { flex: 1, padding: 5 },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: { fontSize: 20 }
})
