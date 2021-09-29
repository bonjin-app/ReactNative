import { useNavigation } from '@react-navigation/native'
import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, View, Text, Switch, FlatList } from 'react-native'
import { useTheme } from 'react-native-paper'
import { useToggleTheme } from '../contexts'
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts'
import * as D from '../data'
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

  // for people
  const [scrollEnabled] = useScrollEnabled()
  const [people, setPeople] = useState<D.IPerson[]>([])
  const theme = useTheme()
  const toggleTheme = useToggleTheme()
  const addPerson = useCallback(() => {
    setPeople(people => [D.createRandomPerson(), ...people])
  }, [])
  const removeAllPersons = useCallback(() => {
    setPeople(notUsed => [])
  }, [])
  const deletePerson = useCallback(
    (id: string) => () =>
      setPeople(people => people.filter(person => person.id != id)),
    []
  )
  // useEffect(addPerson, [])

  useEffect(() => {
    D.makeArray(5).forEach(addPerson)
  }, [])

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view, { backgroundColor: theme.colors.surface }]}>
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
          <FlatList
            scrollEnabled={scrollEnabled}
            data={people}
            renderItem={({ item }) => (
              <Person person={item} deletePressed={deletePerson(item.id)} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: { flex: 1 },
  text: { marginRight: 10, fontSize: 20 }
})
