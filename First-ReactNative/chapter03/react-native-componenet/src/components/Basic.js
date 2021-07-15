import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Basic = () => {
    const name = 'GIGAS';

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {/* if 조건문 */}
                {/* {(() => {
                if (name === 'hanbit') return 'My name is Hanbit';
                else if (name === "GIGAS") return 'My name is GIGAS';
                else return 'My name is React Native'
                })()} */}

                {/* // 삼항 연산자 */}
                {/* My name is {name === 'GIGAS' ? 'GIGAS' : 'React Native'} */}

                {/* // AND 연산자와 OR 연산자 */}
                {name === 'GIGAS' && (
                    <Text style={styles.text}>My name is GIGAS</Text>
                )}

                {name !== 'GIGAS' && (
                    <Text style={styles.text}>My name is not GIGAS</Text>
                )}
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30
    }
});

export default Basic
