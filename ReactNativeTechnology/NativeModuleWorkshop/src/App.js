import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ToastModule from './Toast';

const App = () => {
  const onPress = () => {
    ToastModule.show('Hello World', ToastModule.SHORT);
  };

  return (
    <SafeAreaView>
      <Button title="Press Me" onPress={onPress} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
