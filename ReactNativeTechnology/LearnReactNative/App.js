import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  return (
    <SafeAreaView style={styles.full}>
      <Counter />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
