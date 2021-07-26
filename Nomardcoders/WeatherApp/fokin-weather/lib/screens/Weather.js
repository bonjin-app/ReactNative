import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Thunderstorm',
        subTitle: 'I know, funking boring',
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#00C6FB', '#66A6FF'],
        title: 'Drizzle',
        subTitle: 'I know, funking boring',
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00C6FB', '#005BEA'],
        title: 'Rain',
        subTitle: 'I know, funking boring',
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#7DE2FC', '#B9B6E5'],
        title: 'Snow',
        subTitle: 'I know, funking boring',
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Atmosphere',
        subTitle: 'I know, funking boring',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FEF253', '#304352'],
        title: 'Clear',
        subTitle: 'I know, funking boring',
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Clouds',
        subTitle: 'I know, funking boring',
    },
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Haze',
        subTitle: 'I know, funking boring',
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Mist',
        subTitle: 'I know, funking boring',
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Smoke',
        subTitle: 'I know, funking boring',
    },
    Smoke: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Smoke',
        subTitle: 'I know, funking boring',
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
            <View style={[styles.halfContainer, styles.textContainer]}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
    },
    subTitle: {
        color: "white",
        fontWeight: '600',
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
})
