import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Slider } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../utils/colors';

import Neumorphism from '../components/Neumorphism'

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <SafeAreaView style={{alignSelf: 'stretch'}}>
                <View style={{ marginHorizontal: 32, marginTop: 32 }}>
                    <View style={styles.topContainer}>
                        <Neumorphism size={48}>
                            <AntDesign
                                name="arrowleft"
                                size={20}
                                color={ colors.grey}
                            />
                        </Neumorphism>

                        <View>
                            <Text style={styles.playing}>PLAYING NOW</Text>
                        </View>
                        <Neumorphism size={48}>
                            <Entypo
                                name="menu"
                                size={24}
                                color={colors.grey}
                                />
                        </Neumorphism>
                    </View>

                    <View style={styles.songArtContainer}>
                        <Neumorphism size={300}>
                            <Image
                                source={require('../../assets/rain.jpg')}
                                style={styles.songArt}
                                />
                        </Neumorphism>
                    </View>

                    <View style={styles.songContainer}>
                        <Text style={styles.title}>Lost it</Text>
                        <Text style={styles.artist}>Flume ft, Vic Mensa</Text>
                    </View>

                    <View style={styles.trackContainer}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.time}>1:21</Text>
                            <Text style={styles.time}>3:46</Text>
                        </View>

                        <Slider
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#8AAAFF"
                            maximumTrackTintColor="#DAE6F4"
                            thumbTintColor="#7B9BFF"
                        />

                        <View style={styles.controlsContainer}>
                            <Neumorphism size={80}>
                                <Ionicons
                                    name="play-back"
                                    size={24}
                                    color={colors.grey}
                                />
                            </Neumorphism>
                            
                            <Neumorphism size={80} style={{backgroundColor: '#8AAAFF', borderColor: '#8AAAFF'}}>
                                <Ionicons
                                    name="pause"
                                    size={24}
                                    color='#FFF'
                                />
                            </Neumorphism>

                            <Neumorphism size={80}>
                                <Ionicons
                                    name="play-forward"
                                    size={24}
                                    color={colors.grey}
                                />
                            </Neumorphism>
                            
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEE9FD',
        alignItems: 'center',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    playing: {
        color: colors.grey,
        fontWeight: '800',
    },
    songArtContainer: {
        marginVertical: 32,
        alignItems: 'center',
    },  
    songArt: {
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        borderColor: '#D7E1F3',
        borderWidth: 10,
    },
    songContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#6C7A93',
        fontWeight: '600',
    },
    artist: {
        fontSize: 14,
        marginTop: 6,
        color: colors.grey,
        fontWeight: '500',
    },
    trackContainer: {
        marginTop: 32,
        marginBottom: 64,
    },
    time: {
        fontSize: 10,
        color: colors.grey,
        fontWeight: '700',
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    }
})
