import React from 'react'
import Home from './components/Home'
import Liked from './components/Liked'
import Profile from './components/Profile'
import Detail from './components/Detail'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../assets/colors/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: colors.white,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    elevation: 0,
                },
                showLabel: false,
                activeTintColor: colors.orange,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={32} color={color} />
                }} />
            <Tab.Screen
                name="Liked"
                component={Liked}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="heart" size={32} color={color} />
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={32} color={color} />
                }} />
        </Tab.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    // transitionSpec: {
                    //     open: config,
                    //     close: closeConfig,
                    // }
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen
                    name="Tab"
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                        headerStyle: {
                            elevation: 0,
                        }
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                        headerShown: false,
                        headerStyle: {
                            elevation: 0,
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
