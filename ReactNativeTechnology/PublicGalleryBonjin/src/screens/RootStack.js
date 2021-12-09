import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default RootStack;

const styles = StyleSheet.create({});
