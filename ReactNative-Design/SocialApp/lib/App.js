import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppStackScreens from './stacks/AppStackScreens'

const App = () => {
  return (
    <NavigationContainer>
      <AppStackScreens/>
    </NavigationContainer>
  )
}

export default App
