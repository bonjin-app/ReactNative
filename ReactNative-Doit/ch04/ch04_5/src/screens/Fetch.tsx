import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'
import { useAsync } from '../hooks/useAsync'
import Country from './Country'

const Fetch = () => {
    const [countries, setCountries] = useState<D.ICountry[]>([])
    const [error, resetError] = useAsync(async () => {
        setCountries([])
        resetError()

        // Error
        // await Promise.reject(new Error('some error occurs'));

        const countries = await D.getCountries()
        setCountries(countries)
    })

    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>Fetch</Text>
            {error && <Text>{error.message}</Text>}

            <FlatList
                data={countries}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Country country={item} />}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={ styles.separator}></View>}
            />
        </View>
    )
}

export default Fetch

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.blue100,
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
    },
    separator: {
        borderBottomColor: Colors.blue50,
        borderBottomWidth: 1
    }
})
