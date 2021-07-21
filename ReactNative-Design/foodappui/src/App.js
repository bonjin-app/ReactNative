import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators, HeaderTitle } from '@react-navigation/stack';
import { Text, Easing } from 'react-native';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    confing: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    }
}

const closeConfig = {
    animation: 'timing',
    config: {
        duration: 500,
        easing: Easing.lenear,
    }
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
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
