import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';

Icon.loadFont();

export default function Details({ route }) {

    const { item } = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <View style={styles.headerLeft}>
                        <Icon
                            name="chevron-left"
                            size={12}
                            color={colors.textDark} />
                    </View>
                    <View style={styles.headerRight}>
                        <Icon
                            name="star"
                            size={12}
                            color={colors.white} />
                    </View>
                </View>
            </SafeAreaView>
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
    }
});
