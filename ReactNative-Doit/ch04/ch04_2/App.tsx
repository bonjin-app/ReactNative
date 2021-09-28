import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import Cache from './src/screens/Cache'
import Fibo from './src/screens/Fibo'
import Memo from './src/screens/Memo'

const { width } = Dimensions.get('window')
const numberOrComponents = 3

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]}>
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  contentContainerStyle: {
    width: width * numberOrComponents
  }
})
