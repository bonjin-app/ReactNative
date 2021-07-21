import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';

Icon.loadFont();

export default function Details({ navigation, route }) {

    const { item } = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <View style={styles.headerLeft}>
                            <Icon
                                name="chevron-left"
                                size={12}
                                color={colors.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <Icon
                            name="star"
                            size={12}
                            color={colors.white} />
                    </View>
                </View>
            </SafeAreaView>

            {/* Titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>
                    $3.99
                </Text>
            </View>

            {/* Info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoIteWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>
                            {item.sizeName} {item.sizeNumber}"
                        </Text>
                    </View>
                    <View style={styles.infoIteWrapper}>
                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoItemText}>
                            {item.crust}
                        </Text>
                    </View>
                    <View style={styles.infoIteWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery In</Text>
                        <Text style={styles.infoItemText}>
                            {item.deliveryTime} min
                        </Text>
                    </View>
                </View>
                <View style={styles.infoRightWrapper}>
                    <Image source={item.image} style={styles.itemImage} />
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
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    titlesWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        width: '50%',
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText: {
        color: colors.price,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
    infoWrapper: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoIteWrapper: {
        marginBottom: 20,
    },
    infoItemTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.textLight,
    },
    infoItemText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.textDark,
    },
    infoRightWrapper: {

    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },
});
