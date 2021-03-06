import React, { FC, useCallback } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { StyleSheet, View, Text} from 'react-native'
import { DrawerActions } from '@react-navigation/routers'
import { NavigationHeader, Switch, UnderlineText } from '../theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from '../components'
import * as D from '../data'
import { useSelector } from 'react-redux'
import { AppState, User } from '../store'

const loginUser = D.createRandomPerson()

const DrawerContent: FC<DrawerContentComponentProps> = (props) => {

  const loggedIn = useSelector<AppState, boolean>((state) => state.loggedIn)
  const loggedUser = useSelector<AppState, User>((state) => state.loggedUser)
  const {email, name} = loggedUser

  const { navigation } = props
  const close = useCallback(() => {
    navigation.dispatch(DrawerActions.closeDrawer())
  }, [])

  if (!loggedIn) {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
        <NavigationHeader
          Right={() => <Icon name="close" size={24} onPress={close} />}
        />

        <View style={[styles.content]}>
          <Text style={[styles.text]}>Please login or signup.</Text>
          <View style={[styles.row, { marginTop: 20 }]}>
            <Switch />
          </View>
        </View>
      </DrawerContentScrollView>
    )
  }

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
      <NavigationHeader
        Right={() => <Icon name="close" size={24} onPress={close} />}
      />
      <View style={[styles.content]}>
        <View style={[styles.row]}>
          <Avatar uri={loginUser.avatar} size={40} />
          <Text style={[styles.text, styles.m]}>{name}</Text>
        </View>
        <View style={[styles.row]}>
          <UnderlineText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text, styles.m]}>
            {email}
          </UnderlineText>
        </View>
        <View style={[styles.row, {marginTop: 20}]}>
          <Switch />
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  row: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  m: {marginLeft: 5},
  text: {fontSize: 20},
  content: {flex: 1, padding: 5}
})

export default DrawerContent