import React from 'react'
import { Button, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View } from 'react-native'
import colors from '../../assets/colors/colors'
import Icon from 'react-native-vector-icons/Feather'
import activitesData from '../../assets/data/activitiesData'
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
                    imageStyle={styles.discoverItemImage}
                >
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

    return (
        <View style={styles.container}>
            <ScrollView>
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
})
