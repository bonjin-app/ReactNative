import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => {
          navigation.push('Detail', {id: 1});
        }}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => {
          navigation.push('Detail', {id: 2});
        }}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => {
          navigation.push('Detail', {id: 3});
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
