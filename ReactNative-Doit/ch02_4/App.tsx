import React from 'react'
import { View, Text, Button, Alert, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native'

const App = () => {

  const onPress = () => {
    Alert.alert('home pressed', 'message');
  }

  return (
    <SafeAreaView>
      <Button title="Home" onPress={onPress}></Button>

      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <Text onPress={onPress}>Press M</Text>
    </SafeAreaView>
  )
}

export default App
