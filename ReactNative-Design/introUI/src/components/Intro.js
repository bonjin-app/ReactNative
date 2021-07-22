import React from 'react'
import { StyleSheet, Text, Image, View, StatusBar } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../../assets/colors/colors';

const data = [
    {
        title: 'Save time by tracking your studies',
        text: 'Schedule your classes, assignments, quizzes and more',
        image: require('../../assets/images/Onboard1.png'),
    },
    {
        title: 'Stay on top of your education',
        text: 'Reduce your stress, increase your productivity',
        image: require('../../assets/images/Onboard2.png'),
    },
    {
        title: 'Spend more time doing the things you love',
        text: 'Get started within five minutes',
        image: require('../../assets/images/Onboard3.png'),
    },
];

const Intro = (props) => {

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slideWrapper}>
                <Image source={item.image} style={styles.slideImage} />
                <View>
                    <Text style={styles.slideTitle}>{item.title}</Text>
                    <Text style={styles.slideText}>{item.text}</Text>
                </View>
            </View>
        )
    }

    const _keyExtractor = (item) => item.title;

    const _renderDoneButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Done</Text>
            </View>
        )
    }

    const _renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        )
    }

    const _renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        )
    }

    const _handleDone = () => {
        props.handleDone();
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={_keyExtractor}
                renderItem={_renderItem}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                renderPrevButton={_renderPrevButton}
                showPrevButton
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                onDone={_handleDone}
                data={data}
            />
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    slideWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    slideImage: {
        marginVertical: 60,
    },
    slideTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
        marginHorizontal: 60,
    },
    slideText: {
        fontSize: 14,
        color: colors.grey,
        textAlign: 'center',
        marginHorizontal: 60,
        marginTop: 20,
    },

    rightTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightText: {
        color: colors.blue,
        fontSize: 14,
    },
    leftTextWrapper: {
        width: 40,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftText: {
        color: colors.blue,
        fontSize: 14,
    },

    dotStyle: {
        backgroundColor: colors.blueFaded,
    },
    activeDotStyle: {
        backgroundColor: colors.blue,
    },
})
