import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'
import DrawerContent from './DrawerContent'
import Login from './Login'
import SignUp from './SignUp'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator()

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{ title: 'home' }} />
    </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({
  view: { flex: 1, padding: 5 },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: { fontSize: 20 }
})
