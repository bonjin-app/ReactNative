import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, TextInput, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {

    const [name, setName] = useState('');

    const _continus = () => {
        navigation.navigate("Chat", {
            name: name,
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View style={{ marginTop: 64}}>
                <Image
                    source={require('../../assets/chat.png')}
                    style={{width: 100, height: 100, alignSelf: 'center'}}
                />
            </View>
            <View style={{ marginHorizontal: 32}}>
                <Text style={styles.header}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DesignIntoCode"
                    onChangeText={(name) => setName(name)}
                    value={name}
                />
                <View style={{alignItems: 'flex-end', marginTop: 64}}>
                    <Pressable
                        style={styles.continue}
                        onPress={_continus}
                    >
                        <Icon
                            name="arrow-right"
                            size={18}
                            color="#FFF"
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F7',
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: '#fff',
        position: 'absolute',
        left: -120,
        top: -20,
    },
    header: {
        fontWeight: '600',
        fontSize: 30,
        color: '#514E5A',
        marginTop: 32,
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#514E5A',
        fontWeight: '600',
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#9075E3',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
