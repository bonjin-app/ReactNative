import React, { Fragment, useEffect, useRef, useState} from 'react'
import {
    Animated,
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native'
import songs from '../../assets/data/data.json';
import Controller from '../components/Controller';

const { width, height } = Dimensions.get('window');

const Player = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const slider = useRef(null);
    const [playIndex, setPlayIndex] = useState(0);

    const position = useRef(Animated.divide(scrollX, width)).current;

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            const index = Math.round(value / width);
            setPlayIndex(index);
        })

        return () => {
            scrollX.removeAllListeners();
        }
    }, []);

    const renderItem = ({ index, item }) => {
        return (
            <Animated.View
                style={{
                    alignItems: 'center',
                    width: width,
                    transform: [
                        {
                            translateX: Animated.multiply(
                                Animated.add(position, -index),
                                -100
                            )
                        }
                    ]
                }}
            >
                <Animated.Image
                    source={{
                        uri: item.artwork,
                    }}
                    style={{
                        width: 320,
                        height: 320,
                        borderRadius: 5,
                        backgroundColor: '#EAEAEA'
                    }}
                />
            </Animated.View>
        )
    }

    const goNext = () => {
        slider.current.scrollToOffset({
        offset: (playIndex + 1) * width,
        });
    };

    const goPrev = () => {
        slider.current.scrollToOffset({
        offset: (playIndex - 1) * width,
        });
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={{height: 320}}>
                <Animated.FlatList
                    ref={slider}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    data={songs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }],
                        { useNativeDriver: true}
                    )}
                />
            </SafeAreaView>
            <View>
                <Text style={styles.title}>{songs[playIndex].title}</Text>
                <Text style={styles.artist}>{songs[playIndex].artist}</Text>
            </View>

            <Controller
                onNext={goNext}
                onPrev={goPrev}
            />
        </SafeAreaView>
    )
}

export default Player

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        height: height,
        maxHeight: 500,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    artist: {
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'capitalize',
    }
})
