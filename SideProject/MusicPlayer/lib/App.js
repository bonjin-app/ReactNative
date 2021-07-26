import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Player from './screens/Player'

const App = () => {
  return (
    <View style={styles.container}>
      <Player/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  }
})
