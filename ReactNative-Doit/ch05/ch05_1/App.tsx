import React, { useCallback, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { ToggleThemeProvider } from './src/contexts'
import MainNavigator from './src/screens/MainNavigator'

const App = () => {

  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme === 'dark' ? DarkTheme : DefaultTheme)

  const toggleTheme = useCallback(() => setTheme((theme) => (theme.dark ? DefaultTheme : DarkTheme)), [])

  return (
    <AppearanceProvider>
      <PaperProvider theme={DarkTheme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={[styles.safeAreaView]}>
            <MainNavigator />
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  )
}

export default App

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  }
})
