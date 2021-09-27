import Color from 'color'
import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

console.log(Colors.blue500)
console.log(Color(Colors.blue500).alpha(0.5).lighten(0.5).string())

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello world!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue500
  },
  text: {
    color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string(),
    fontSize: 20
  }
})

export default App
