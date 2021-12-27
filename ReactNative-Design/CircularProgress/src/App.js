import React from 'react';
import {StyleSheet, View} from 'react-native';
import CircularProgress from './CircularProgress';

const App = () => {
  return (
    <View style={styles.container}>
      <CircularProgress progress={35} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
