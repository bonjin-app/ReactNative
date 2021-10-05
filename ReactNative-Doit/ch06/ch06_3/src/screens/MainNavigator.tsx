import React, {useState} from 'react'
import {BottomNavigation} from 'react-native-paper'
import EnterExit from './EnterExit'
import Parallel from './Parallel'
import Sequence from './Sequence'
import Stagger from './Stagger'

export default function MainNavigator() {
  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([
    {key: 'sequence', title: 'Sequence', icon: 'view-sequential'},
    {key: 'parallel', title: 'Parallel', icon: 'view-parallel'},
    {key: 'stagger', title: 'Stagger', icon: 'arrange-send-backward'},
    {key: 'enterExit', title: 'EnterExit', icon: 'location-enter'},
  ])
  const renderScene = BottomNavigation.SceneMap({
    sequence: Sequence,
    parallel: Parallel,
    stagger: Stagger,
    enterExit: EnterExit
  })

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}
