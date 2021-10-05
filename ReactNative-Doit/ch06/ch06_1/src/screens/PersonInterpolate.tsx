import React, {useCallback, useEffect, useRef, useState} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert, Animated, Easing} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {Avatar, IconText} from '../components'
import { Text as ThemeText, View as ThemeView } from '../theme/paper'
import { styles } from './Person.style'
import { useAnimatedValue, useMonitorAnimatedValue, useStyle, useToggle } from '../hooks'

export type PersonProps = {
  person: D.IPerson,
  deletePressed: () => void,
}
// prettier-ignore
const PersonInterpolate: FC<PersonProps> = ({person, deletePressed}) => {
  const animValue = useAnimatedValue(0)

  const realAnimValue = useMonitorAnimatedValue(animValue)
  const [started, toggleStarted] = useToggle()

  const avatarPressed = useCallback(() => {
    Animated.timing(animValue, {
      useNativeDriver: false,
      toValue: started ? 0 : 1,
      duration: 1000,
      easing: Easing.bounce
      
    }).start(toggleStarted)
    
  }, [started])

  const textAnimStyle = useStyle({
    fontSize: animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 30]
    }),
    color: animValue.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [Colors.lightBlue900, Colors.lime500, Colors.blue900]
    })
  })
  
  return (
    <ThemeView>
      <ThemeText style={[{fontSize: 20}]}>
        realAnimValue: {realAnimValue}
      </ThemeText>
      <ThemeText style={[{fontSize: 20}]}>
        realAnimEnd: {started ? 'true' : 'false'}
      </ThemeText>
      <View style={[styles.view]}>
        <View style={[styles.leftView]}>
          <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50}
            onPress={avatarPressed} />
          <Text style={[styles.text]}>Press Me</Text>
        </View>
        <View style={[styles.rightView]}>
          <Animated.Text style={[styles.name, textAnimStyle]}>
            {person.name}
          </Animated.Text>
          <Text style={[styles.email]}>{person.email}</Text>
          <View style={[styles.dateView]}>
            <Text style={[styles.text]}>
              {moment(person.createdDate).startOf('day').fromNow()}
            </Text>
            <Icon name="trash-can-outline" size={26} color={Colors.lightBlue500}
              onPress={deletePressed}/>
          </View>
          <Text numberOfLines={3} ellipsizeMode="tail"
            style={[styles.text, styles.comments]}>
            {person.comments}
          </Text>
          <Image style={[styles.image]} source={{uri: person.image}} />
          <View style={[styles.countsView]}>
            <Icon
              name="comment"
              size={24}
              color={Colors.blue500}
            />
            <Icon
              name="twitter-retweet"
              size={24}
              color={Colors.purple500}
            />
            <Icon
              name="heart"
              size={24}
              color={Colors.red500}
            />
          </View>
        </View>
        </View>
    </ThemeView>
  )
}
export default PersonInterpolate
