import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react'
import type { FC } from 'react'
import { View, Text, Image, Alert, Animated, Easing } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import { useToggle } from '../hooks' // 추가했습니다.
import { Avatar } from '../components'
import { styles } from './Person.style'
import { TouchableView } from '../theme/navigation'

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void // 추가했습니다.
}

const Person: FC<PersonProps> = ({ person: initialPerson, deletePressed }) => {

  const [person, setPerson] = useState<D.IPerson>(initialPerson)
  // 바뀐 부분입니다.
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trach-can"
            size={30}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{ uri: person.image }} />
        <View style={[styles.countsView]}>
          <TouchableView style={[styles.countView]}>
            <Icon name="comment" size={24} color={Colors.blue500} />
            <Text>{person.counts.comment}</Text>
          </TouchableView>

          <TouchableView style={[styles.countView]}>
            <Icon name="twitter-retweet" size={24} color={Colors.purple500} />
            <Text>{person.counts.retweet}</Text>
          </TouchableView>

          <TouchableView style={[styles.countView]}>
            <Icon name="heart" size={24} color={Colors.red500} />
            <Text>{person.counts.heart}</Text>
          </TouchableView>
        </View>
      </View>
    </View>
  )
}
export default Person
