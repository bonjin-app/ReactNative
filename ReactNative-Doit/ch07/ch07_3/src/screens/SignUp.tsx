import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView, TopBar } from '../theme/navigation'

const title = 'SignUp'
export default function SignUp() {
  return (
    <SafeAreaView style={[styles.view]}>
      <View style={[styles.view]}>
        <TopBar />
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
