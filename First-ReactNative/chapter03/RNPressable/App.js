/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, Pressable } from 'react-native';

const Button = (props) => {
  return (
    <Pressable
      style={{
        padding: 10, backgroundColor: '#1abc9c'
      }}
      onPressIn={() => console.log('onPressIn')}
      onPressOut={() => console.log('onPressOut')}
      onPress={() => console.log('onPress')}
      onLongPress={() => console.log('onLongPress')}
      delayLongPress={3000}
      pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
      hitSlop={10}
    >
      <Text style={{ padding: 10, fontSize: 30 }}>{props.title}</Text>
    </Pressable>
  )
}

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center'
    }}>
      <Button title="Pressable" />
    </View>
  )
}

export default App;