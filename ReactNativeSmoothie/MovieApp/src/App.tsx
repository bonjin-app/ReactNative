import React from 'react'
import { StatusBar } from 'react-native'
import Navigator from '~/screens/Navigator'
import { UserContextProvider } from './contexts/User'

const App = () => {
  return (
    <UserContextProvider>
      <StatusBar barStyle="light-content"/>
      <Navigator/>
    </UserContextProvider>
  )
}

export default App
