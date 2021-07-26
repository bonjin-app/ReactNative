import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const App = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
      <Text style={{
        fontSize: 40,
        textAlign: 'center',
      }}>Welcome to {"\n "} CreativeJE</Text>
      <Icon
        name="cake"
        size={170}
      />
    </View>
  )
}

export default App
