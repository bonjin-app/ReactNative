import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Person from './src/screens/Person'
import * as D from './src/data'

const people = D.makeArray(100).map(D.createRandomPerson)

const App = () => {
  const children = people.map((person) => {
    return <Person key={ person.id} person={ person}/>
  })

  return (
    <SafeAreaView>
      <ScrollView>
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
