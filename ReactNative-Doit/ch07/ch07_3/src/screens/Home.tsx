import { useNavigation } from '@react-navigation/core'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, Switch, FlatList } from 'react-native'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LeftRightNavigation, LeftRightNavigationMethods } from '../components'
import { useToggleTheme } from '../contexts'
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts'
import * as D from '../data'
import { NavigationHeader } from '../theme'
import { SafeAreaView, TopBar, UnderlineText } from '../theme/navigation'
import Person from './Person'

export default function Home() {

  // navigation
  const navigation = useNavigation()
  const goLeft = useCallback(() => {
    navigation.navigate("HomeLeft")
  }, [])
  const goRight = useCallback(() => {
    navigation.navigate('HomeRight', { id: 'Jack', age: 32 })
  }, [])
  const logout = useCallback(() => {
    navigation.navigate('Login')
  }, [])

  // for people
  const [scrollEnabled] = useScrollEnabled()
  const [people, setPeople] = useState<D.IPerson[]>([])

  const leftRef = useRef<LeftRightNavigationMethods | null>(null)

  const addPerson = useCallback(() => {
    setPeople(people => [D.createRandomPerson(), ...people])
  }, [])
  const removeAllPersons = useCallback(() => {
    setPeople(notUsed => [])
  }, [])
  const deletePerson = useCallback((id: string) => () => {
    setPeople(people => people.filter(person => person.id != id)),
      leftRef.current?.resetOffset(),
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })
  }, [])
  // useEffect(addPerson, [])

  const flatListRef = useRef<FlatList | null>(null)

  useEffect(() => {
    D.makeArray(5).forEach(addPerson)
  }, [])

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <NavigationHeader title="Home" Right={() => <Icon name="logout" size={30} onPress={logout} />} />
          <TopBar>
            <UnderlineText onPress={goLeft} style={styles.text}>go Left</UnderlineText>
            <UnderlineText onPress={goRight} style={styles.text}>go Right</UnderlineText>
          </TopBar>
          <TopBar noSwitch>
            <UnderlineText onPress={addPerson} style={styles.text}>
              add
            </UnderlineText>
            <UnderlineText onPress={removeAllPersons} style={styles.text}>
              remove all
            </UnderlineText>
          </TopBar>

          <LeftRightNavigation
            ref={leftRef} distance={40}
            flatListRef={flatListRef}
            onLeftToRight={goLeft}
            onRightToLeft={goRight}
          >
            <FlatList
              ref={flatListRef}
              scrollEnabled={scrollEnabled}
              data={people}
              renderItem={({ item }) => (
                <Person person={item} deletePressed={deletePerson(item.id)} />
              )}
              keyExtractor={item => item.id}
            />
          </LeftRightNavigation>
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: { flex: 1 },
  text: { marginRight: 10, fontSize: 20 }
})
