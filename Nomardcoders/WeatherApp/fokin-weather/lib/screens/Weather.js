import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#00C6FB', '#66A6FF'],
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00C6FB', '#005BEA'],
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#7DE2FC', '#B9B6E5'],
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FEF253', '#304352'],
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352'],
    },
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
    },
    Smoke: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
    },
}

const Weather = ({ temp, condition }) => {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            
            <View style={styles.halfContainer}>
                <StatusBar barStyle="light-content" />
                <Icon
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color='white'
                />
                <Text style={styles.temp}>{temp} ℃</Text>
            </View>
            <View style={styles.halfContainer}>
                
            </View>

        </LinearGradient>
    )
}

export default Weather

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Smoke",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
