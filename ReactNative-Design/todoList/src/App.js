import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <SafeAreaView>
        <View style={styles.tasksWrapper}>

          <Text style={styles.sectionTitle}>Today's tasks</Text>


          <View style={styles.items}>

          </View>
        </View>
      </SafeAreaView>
    </View >
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {

  },
})
