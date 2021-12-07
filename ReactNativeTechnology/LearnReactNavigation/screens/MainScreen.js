import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Detail 1 열기"
        onPress={() => {
          navigation.push('Detail');
        }}
      />
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
        tabBarIndicatorStyle: {
          backgroundColor: '#009688',
        },
        tabBarActiveTintColor: '#fb8c00',
        // tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color}) => {
            <Icon name="home" color={color} size={24} />;
          },
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
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color}) => {
            <Icon name="notifications" color={color} size={24} />;
          },
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
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
