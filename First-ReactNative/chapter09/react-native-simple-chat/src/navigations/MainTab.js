import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, ChannelList } from '../screens'
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components/native';
import { theme } from '../theme';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name }) => {
    const thene = useContext(ThemeContext);

    return (
        <MaterialIcons
            name={name}
            size={26}
            color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
        />
    );
}

const MainTab = () => {
    const thene = useContext(ThemeContext);

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: theme.tabActiveColor,
                inactiveTintColor: theme.tabInactiveColor,
            }}
        >
            <Tab.Screen
                name="Channel List"
                component={ChannelList}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return TabBarIcon({
                            focused,
                            name: focused ? 'chat-bubble' : 'chat-bubble-outline'
                        })
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return TabBarIcon({
                            focused,
                            name: focused ? 'person' : 'person-outline'
                        })
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab
