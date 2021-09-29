import React, { FC, useCallback } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { StyleSheet, View, Text } from 'react-native'
import { TopBar } from '../theme/navigation'

const title = 'DrawerContent'
const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props
  const go = useCallback(() => { }, [])

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
      <TopBar />
      <View style={[styles.content]}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
    </DrawerContentScrollView>
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

export default DrawerContent