import React from 'react'
import { Button, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View } from 'react-native'
import colors from '../../assets/colors/colors'
import Icon from 'react-native-vector-icons/Feather'
import activitiesData from '../../assets/data/activitiesData'
import discoverCategoriesData from '../../assets/data/discoverCategoriesData'
import discoverData from '../../assets/data/discoverData'
import learnMoreData from '../../assets/data/learnMoreData'

Icon.loadFont();

const Home = ({ navigation }) => {

    const _renderDiscoverItem = ({ item }) => {
        return (
            <Pressable
                onPress={() => navigation.navigate('Detail', {
                    item: item,
                })}
            >
                <ImageBackground
                    source={item.image}
                    style={[styles.discoverItem, { marginLeft: item.id == 'discover-1' ? 20 : 0 }]}
                    imageStyle={styles.discoverItemImage} >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Icon
                            name="map-pin"
                            size={18}
                            color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </Pressable>
        )
    }

    const _renderActivityItem = ({ item }) => {
        return (
            <View style={[styles.activityItemWrapper, {
                marginLeft: item.id == 'activities-1' ? 20 : 0,
            }]}>
                <Image source={item.image} style={styles.activityItemImage} />
                <Text style={styles.activityItemText}>{item.title}</Text>
            </View>
        )
    }

    const _renderLearnMoreItem = ({ item }) => {
        return (
            <ImageBackground
                source={item.image}
                style={[styles.learnItem, { marginLeft: item.id == 'learnMore-1' ? 20 : 0 }]}
                imageStyle={styles.learnItemImage} >
                <Text style={styles.learnItemTitle}>{item.title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <Icon name="menu"
                            size={32}
                            color={colors.black}
                            style={styles.menuIcon} />
                        <Image
                            source={require('../../assets/images/person.png')}
                            style={styles.profileImage} />
                    </View>
                </SafeAreaView>

                {/* Discover */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoryText, { color: colors.orange }]}>All</Text>
                        <Text style={styles.discoverCategoryText}>Destinations</Text>
                        <Text style={styles.discoverCategoryText}>Cities</Text>
                        <Text style={styles.discoverCategoryText}>Experiences</Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                            data={discoverData}
                            renderItem={_renderDiscoverItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.activitiesItemsWrapper}>
                        <FlatList
                            data={activitiesData}
                            renderItem={_renderActivityItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Learn More */}
                <View style={styles.learnMoreWrapper}>
                    <Text style={styles.learnMoreTitle}>Learn More</Text>
                    <View style={styles.learnMoreItemsWrapper}>
                        <FlatList
                            data={learnMoreData}
                            renderItem={_renderLearnMoreItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuIcon: {

    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },

    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 32,
    },
    discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20,
    },
    discoverCategoryText: {
        marginRight: 30,
        fontWeight: '300',
        fontSize: 16,
        color: colors.gray,
    },

    discoverItemsWrapper: {
        paddingVertical: 20,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.white,
    },

    activitiesWrapper: {
        marginTop: 10,
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.black,
    },
    activitiesItemsWrapper: {
        paddingVertical: 20,
    },
    activityItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
    },
    activityItemImage: {
        width: 36,
    },
    activityItemText: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.gray,
    },

    learnMoreWrapper: {
        marginTop: 10,
    },
    learnMoreTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.black,
    },
    learnMoreItemsWrapper: {
        paddingVertical: 20,
    },
    learnItem: {
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    learnItemImage: {
        borderRadius: 20,
    },
    learnItemTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 10,
        marginVertical: 20,
    },
})
