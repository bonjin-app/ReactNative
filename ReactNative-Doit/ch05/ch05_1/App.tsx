import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import MainNavigator from './src/screens/MainNavigator'

const App = () => {
  return (
    <SafeAreaView style={ [styles.safeAreaView]}>
      <MainNavigator/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  }
})
