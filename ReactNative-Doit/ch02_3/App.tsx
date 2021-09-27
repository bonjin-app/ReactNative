import React from 'react'
import { SafeAreaView } from 'react-native'
import ArrowComponent from './src/screens/ArrowComponent'
import ClassComponent from './src/screens/ClassComponent'
import Person from './src/screens/Person'
import * as D from './src/data'

const person = D.createRandomPerson()

const App = () => {
  return (
    <SafeAreaView>
      <ClassComponent />
      <ArrowComponent />
      <Person person={person} />
    </SafeAreaView>
  )
}

export default App
