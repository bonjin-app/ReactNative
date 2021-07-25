import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
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
})
