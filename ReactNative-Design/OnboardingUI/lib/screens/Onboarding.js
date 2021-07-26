import React, { useEffect, useRef, useState } from 'react'
import { FlatList, ImageBackground, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, sizes } from '../constants'
import AndDesignIcon from 'react-native-vector-icons/AntDesign'
// import data from '../data/onboarding'

const data = [
    {
        _id: '1',
        title: 'Play The Beat',
        description: 'Most beginner producers learn make creating by simple beats.',
        img: require('../../assets/images/Guitar.png')
    },
    {
        _id : '2',
        title: 'Live The Life',
        description: 'In our daily lives, we often rush tasks trying to get them finish.',
        img: require('../../assets/images/Enjoy.png')
    },
    {
        _id : '3',
        title: 'Capture The Moment',
        description: 'You are not alone. You have unique ability to go to another world.',
        img: require('../../assets/images/Selfi.png')
    },
]

const Onboarding = () => {

    const flatlistRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([])

    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems)
    })

    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index) {
            return;
        }
        setCurrentPage(viewableItems[0].index)

    }, [viewableItems])

    const _renderTopSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: sizes.base * 2,
                }}>
                    {/* Back Button */}
                    <Pressable style={{
                        padding: sizes.base,
                    }}>
                        <AndDesignIcon
                            name="left"
                            style={{
                                fontSize: 24,
                                color: colors.black,
                                opacity: 1,
                            }}
                        />
                    </Pressable>

                    {/* Skip Button */}
                    <Pressable style={{
                        padding: sizes.base,
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: colors.black,
                            opacity: 1,
                        }}>Skip</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        )
    }

    const _renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: sizes.base * 2,
                    paddingVertical: sizes.base * 2,
                }}>

                    {/* Pagenation */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        {[...Array(data.length)].map((m, i) => {
                            return (
                                <View key={i}
                                    style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: colors.primary,
                                    marginRight: 8,
                                }}>
                                </View>
                            )
                        })}
                    </View>

                    {/* Next Button */}
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: colors.primary,
                    }}
                        activeOpacity={0.8}
                    >
                        <AndDesignIcon
                            name="right"
                            style={{
                                fontSize: 18,
                                color: colors.white,
                                opacity: 0.3
                            }}
                        />

                        <AndDesignIcon
                            name="right"
                            style={{
                                fontSize: 25,
                                color: colors.white,
                                marginLeft: -15,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    const _renderFlatlistItem = ({item}) => {
        return (
            <View style={{
                width: sizes.width,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View style={{
                    alignItems: 'center',
                    marginVertical: sizes.base * 2,
                }}>
                    <ImageBackground
                        source={item.img}
                        style={{
                            width: 335,
                            height: 335,
                            resizeMode: 'contains',
                        }}
                    />
                </View>

                <View style={{
                    paddingHorizontal: sizes.base * 4,
                    marginVertical: sizes.base * 4,
                }}>
                    <Text style={{
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        opacity: 0.4,
                        textAlign: 'center',
                        marginTop: 15,
                        lineHeight: 28,
                    }}>
                        {item.description}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
        }}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.background}
            />

            {/* Top Section */}
            { _renderTopSection() }

            {/* Flatlist */}
            <FlatList
                ref={flatlistRef}
                data={data}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={_renderFlatlistItem}

                onViewableItemsChanged={handleViewableItemsChanged.current}
            />
            

            {/* Bottom Section */}
            { _renderBottomSection() }
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})
