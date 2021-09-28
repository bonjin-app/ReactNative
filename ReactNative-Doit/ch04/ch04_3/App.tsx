import React, { FC, useMemo, useState } from 'react'
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'

import * as D from './src/data'
import PersonUsingObjectState from './src/screens/PersonUsingObjectState'
import PersonUsingPassingState from './src/screens/PersonUsingPassingState'
import PersonUsingValueState from './src/screens/PersonUsingValueState'
import TopBar from './src/screens/TopBar'

const {width} = Dimensions.get('window')

type PersonInformation = {
  title: string
  Component: FC<any>
}

const personInfomations: PersonInformation[] = [
  {title: 'PersonUsingValueState', Component: PersonUsingValueState},
  {title: 'PersonUsingObjectState', Component: PersonUsingObjectState},
  {title: 'PersonUsingPassingState', Component: PersonUsingPassingState},
]

const numberOfComponents = personInfomations.length

const App = () => {
  const [people, setPeople] = useState<D.IPerson[]>([])
  const children = useMemo(() =>
    personInfomations.map(({ title, Component }: PersonInformation) => {
      return (
        <View key={ title} style={{ flex: 1 }}>
          <Text style={[styles.text]}>{title}</Text>
          <FlatList
            data={people}
            renderItem={({ item }) => <Component person={item} />}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={() => <View style={ styles.itemSeparator}></View>}
          />
        </View>
      )
    })
  , [people.length])
  
  return (
    <SafeAreaView style={styles.flex}>
      <TopBar setPeople={ setPeople}/>
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={ styles.horizontalScrollView}>
          {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  },
  itemSeparator: {
    borderWidth: 1,
    borderColor: Colors.grey500
  },
  horizontalScrollView: {
    width: width * numberOfComponents
  }
})
