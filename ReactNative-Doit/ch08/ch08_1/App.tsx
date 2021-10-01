import React, { useCallback, useState } from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'

import MainNavigator from './src/screens/MainNavigator'
import { AppearanceProvider } from 'react-native-appearance'
import { ToggleThemeProvider } from './src/contexts'
import { useColorScheme } from 'react-native'
import { makeStore } from './src/store'

enableScreens()

const store = makeStore()

const App = () => {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme === 'dark' ? DarkTheme : DefaultTheme)

  const toggleTheme = useCallback(() => {
    setTheme(({ dark }) => (
      dark ? DefaultTheme : DarkTheme
    ))
  }, [])

  return (
    <AppearanceProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <ReduxProvider store={ store}>
            <NavigationContainer theme={theme}>
              <MainNavigator />
            </NavigationContainer>
          </ReduxProvider>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </AppearanceProvider>
  )
}

export default App
