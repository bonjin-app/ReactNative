import React, {useCallback, useMemo} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {Avatar, ImageSlider} from '../components'
import {styles} from './Person.style'
import { useLayout, useToggle } from '../hooks'

export type PersonProps = {
  person: D.IPerson,
  deletePressed: () => void,
}

// prettier-ignore
const PersonCarousel: FC<PersonProps> = ({ person, deletePressed }) => {
  const imageUrls = useMemo(() =>  D.makeArray(D.random(2, 6+1)).map(D.randomImage) , [])
  const [layout, setLayout] = useLayout()
  const [showThumbnails, toggleShowThumbnails] = useToggle(true)
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50}
          onPress={avatarPressed} />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View onLayout={setLayout} style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10
        }]}>
          <Text style={[styles.text]}>imageUrls.length: {imageUrls.length}</Text>
          <Text style={[styles.email]} onPress={toggleShowThumbnails}>show thumbnails</Text>
        </View>
        <ImageSlider
          imageUrls={imageUrls}
          imageWidth={layout.width}
          showThumbnails={showThumbnails}
        />
      </View>
    </View>
  )
}
export default PersonCarousel
