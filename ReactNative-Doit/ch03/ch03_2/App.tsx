import React from 'react'
import { StyleSheet, Text, SafeAreaView, Dimensions, Platform } from 'react-native'
import { Colors } from 'react-native-paper'
import Color from 'color'

const { width, height} = Dimensions.get('window')

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: { Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>
    </SafeAreaView>
  )
}

export default App

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.blue500,
    height: '50%',
  },
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).lighten(0.9).string()
  }
})
