import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetail from "./MovieDetail";
import Login from "./Login";
import MovieHome from "./MovieHome";

const Stack = createStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={ Login }
                options={{
                    title: 'MOVIEAPP',
                    headerTransparent: true,
                    headerTintColor: '#E70915',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            />
        </Stack.Navigator>
    )
}

const MovieNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MovieHome"
                component={MovieHome}
                options={{
                    title: 'MOVIEAPP',
                    headerTintColor: '#E70915',
                    headerStyle: {
                        backgroundColor: '#141414',
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

            <Stack.Screen
                name="MovieDetail"
                component={MovieDetail}
                options={{
                title: 'MOVIEAPP',
                headerTintColor: '#E70915',
                headerStyle: {
                    backgroundColor: '#141414',
                    borderBottomWidth: 0,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}