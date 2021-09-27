import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'
import BottomBar from './src/screens/BottomBar'
import Content from './src/screens/Content'
import TopBar from './src/screens/TopBar'

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <TopBar />
      <Content />
      <BottomBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.lightBlue100,
  }
})

export default App
