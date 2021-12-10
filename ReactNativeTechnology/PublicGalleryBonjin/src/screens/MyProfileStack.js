import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyProfileScreen from './MyProfileScreen';

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
    </Stack.Navigator>
  );
};

export default MyProfileStack;

const styles = StyleSheet.create({});
