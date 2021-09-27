import React from 'react'
import { Image, ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import * as D from './src/data'

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50

console.log(avatarUrl)

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex, styles.imageBackground]}
        source={require('./src/assets/images/bg.jpg')}
      >
        <Image source={{ uri: avatarUrl }} style={[styles.image]}/>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  imageBackground: {
    padding: 10,
  },
  image: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
  }
})
