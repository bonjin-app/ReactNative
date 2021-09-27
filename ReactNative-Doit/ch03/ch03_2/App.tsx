import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Dimensions, Platform } from 'react-native'
import { Colors } from 'react-native-paper'
import Color from 'color'

const { width, height} = Dimensions.get('window')

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: { Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>

      <View style={[styles.box, styles.border]}></View>
      <View style={[styles.box, styles.border, {borderRadius: 20}]}></View>
      <View style={[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]}></View>
    </SafeAreaView>
  )
}

export default App

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.blue500,
    flex: 1,
    paddingLeft: Platform.select({ios: 0, android: 20}),
  },
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).lighten(0.9).string(),
    marginBottom: 10,
    marginLeft: 30,
  },
  box: {
    height: 100,
    backgroundColor: Colors.lime500,
    marginBottom: 10,
    marginLeft: Platform.select({ios: 20, android: 0}),
  },
  border: {
    borderWidth: 10,
    borderColor: Color('black').alpha(0.3).string(),
  }
})
