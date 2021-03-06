import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetail from "./MovieDetail";
import Login from "./Login";
import MovieHome from "./MovieHome";
import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from '~/contexts/User';
import Loading from "./Loading";

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
                    headerTitleAlign: 'center',
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
            />

            <Stack.Screen
                name="MovieDetail"
                component={MovieDetail}
                options={{
                title: 'MOVIEAPP',
                headerTintColor: '#E70915',
                headerTitleAlign: 'center',
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

export default () => {
    const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

    if (!isLoading) {
        return <Loading/>
    }

    return (
        <NavigationContainer>
            {userInfo ? <MovieNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    )
}