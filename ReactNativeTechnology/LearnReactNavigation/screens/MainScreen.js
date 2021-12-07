import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/core';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function OpenDetailButton() {
  const navigation = useNavigation();
  return (
    <Button
      title="Detail 1 열기"
      onPress={() => {
        navigation.push('Detail', {id: 1});
      }}
    />
  );
}

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <OpenDetailButton />
    </View>
  );
}
function SearchScreen() {
  return <Text>SearchScreen</Text>;
}
function NotificationScreen() {
  return <Text>NotificationScreen</Text>;
}
function MessageScreen() {
  return <Text>MessageScreen</Text>;
}
const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color}) => {
            <Icon name="home" color={color} size={24} />;
          },
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color}) => {
            <Icon name="search" color={color} size={24} />;
          },
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Notificaitons"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color}) => {
            <Icon name="notifications" color={color} size={24} />;
          },
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color}) => {
            <Icon name="message" color={color} size={24} />;
          },
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
