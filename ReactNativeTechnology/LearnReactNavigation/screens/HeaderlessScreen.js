import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HeaderlessScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Header 없음</Text>
        <Button onPress={() => navigation.pop()} title="뒤로가기" />
      </View>
    </SafeAreaView>
  );
};

export default HeaderlessScreen;

const styles = StyleSheet.create({});
