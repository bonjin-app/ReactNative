import React from 'react'
import { SafeAreaView } from 'react-native'
import ArrowComponent from './src/screens/ArrowComponent'
import ClassComponent from './src/screens/ClassComponent'

const App = () => {
  return (
    <SafeAreaView>
      <ClassComponent />
      <ArrowComponent />
    </SafeAreaView>
  )
}

export default App
