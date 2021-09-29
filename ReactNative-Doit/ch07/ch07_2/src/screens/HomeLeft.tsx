import React, { useCallback } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView, TopBar, UnderlineText } from '../theme/navigation'
import * as D from '../data'
import { useNavigation } from '@react-navigation/native'

const title = 'HomeLeft'
export default function HomeLeft() {
  // navigation
  const navigation = useNavigation()
  const goBack = useCallback(() => {
    navigation.canGoBack() && navigation.goBack()
  }, [])
  const goRight = useCallback(() => {
    navigation.navigate('HomeRight', { id: D.randomId() })
  }, [])

  return (
    <SafeAreaView style={[styles.view]}>
      <View style={[styles.view]}>
        <TopBar>
          <UnderlineText onPress={goBack} style={styles.text}>go Back</UnderlineText>
          <UnderlineText onPress={goRight} style={styles.text}>go Right</UnderlineText>
        </TopBar>
        <View style={[styles.content]}>
          <Text style={[styles.text]}>{title}</Text>
        </View>
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
