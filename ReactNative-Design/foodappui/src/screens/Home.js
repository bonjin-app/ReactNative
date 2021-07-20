import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../assets/colors/colors';
import categoriesData from '../../assets/data/categoriesData';
import popularData from '../../assets/data/popularData';

Icon.loadFont();

export default function Home() {

    const _renderCategoriItem = ({ item }) => {
        return (
            <View style={[
                styles.categoryItemWrapper,
                {
                    backgroundColor: item.selected ? colors.primary : colors.white,
                    marginLeft: item.id === 1 ? 20 : 0,
                },
            ]}>
                <Image style={styles.categoryItemImage} source={item.image} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[
                    styles.categoryselectWrapper,
                    {
                        backgroundColor: item.selected ? colors.white : colors.secondary
                    }
                ]}>
                    <Icon
                        style={styles.categorySelectIcon}
                        name="md-chevron-forward"
                        size={8}
                        color={item.selected ? colors.black : colors.white}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../../assets/images/profile.png')}
                        style={styles.profileImage} />
                    <Icon name="menu" size={24} color={Colors.textDark} />
                </View>
            </SafeAreaView>

            {/* Titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubTitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delivery</Text>
            </View>

            {/* Search */}
            <View style={styles.searchWrapper}>
                <Icon name="search" size={16} color={colors.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>

            {/* Categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList
                        data={categoriesData}
                        renderItem={_renderCategoriItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark,
    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },

    // Item
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
    },
    categoryselectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: 'center',
    },
})
