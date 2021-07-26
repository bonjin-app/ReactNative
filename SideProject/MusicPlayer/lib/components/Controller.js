import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Controller = ({onNext, onPrev}) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPrev}
            >
                <Icon
                    name="skip-previous"
                    size={45}
                />
            </Pressable>
            <Pressable>
                <Icon
                    name="pause"
                    size={45}
                />
            </Pressable>
            <Pressable
                onPress={onNext}
            >
                <Icon
                    name="skip-next"
                    size={45}
                />
            </Pressable>
        </View>
    )
}

export default Controller

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})
