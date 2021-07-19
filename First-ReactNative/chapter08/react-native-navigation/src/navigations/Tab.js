import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabScreens'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
    />
}

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Meet"
            screenOptions={({ route }) => ({
                tabBarIcon: (props) => {
                    let name = '';
                    if (route.name === 'Mail') name = 'email'
                    else if (route.name === 'Meet') name = 'video';
                    else name = 'cog';
                    return TabIcon({ ...props, name })
                }
            })}
        >
            <Tab.Screen
                name="Mail"
                component={Mail}
            />
            <Tab.Screen
                name="Meet"
                component={Meet}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: (props) => TabIcon({ ...props, name: 'cog' })
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigation;