import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useUserContext} from '../contexts/UserContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyProfileStack from './MyProfileStack';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6200EE',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="MayProfileStack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
