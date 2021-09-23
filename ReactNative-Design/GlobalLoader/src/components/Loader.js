import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'

const Loader = (props) => {

    const { isLoading } = props;

    return (
        <Modal transparent visible={isLoading}>
            <View style={styles.Container}>
                <ActivityIndicator size='large' color={'gray'} />
            </View>
        </Modal>
    )
}

export default Loader

const styles = StyleSheet.create({})
