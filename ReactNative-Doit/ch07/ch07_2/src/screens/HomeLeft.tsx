import React, { useCallback } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView, TopBar, UnderlineText } from '../theme/navigation'
import * as D from '../data'
import { useNavigation } from '@react-navigation/core'
import { NavigationHeader, MaterialCommunityIcon as Icon } from '../theme'
import { LeftRightNavigation } from '../components'

const title = 'HomeLeft'
export default function HomeLeft() {
  // navigation
  const navigation = useNavigation()
  const goHome = useCallback(() => navigation.navigate('Home'), [])

  return (
    <SafeAreaView style={[styles.view]}>
      <View style={[styles.view]}>

        <NavigationHeader Right={() => <Icon name="close" size={30} onPress={goHome} />} />
        <LeftRightNavigation distance={40} onRightToLeft={goHome}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
          </View>
        </LeftRightNavigation>
      </View>
    </SafeAreaView>
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
