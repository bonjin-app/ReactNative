import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Counter from './Counter';

const App = () => {
  return <Counter style={styles.block} />;
};

export default App;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
