import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: 'blue' }]}>
      <Text style={[styles.text, {color: 'white'}]}>Hello world!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
})

export default App