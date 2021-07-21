import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Task from './components/Task'

const App = () => {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <SafeAreaView>
        <View style={styles.tasksWrapper}>

          <Text style={styles.sectionTitle}>Today's tasks</Text>

          {/* Items */}
          <View style={styles.items}>
            <Task text="Task 1" />
            <Task text="Task 2" />
            <Task text="Task 3" />
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
    marginTop: 30,
  },
})
