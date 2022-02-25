import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomSheet from './components/BottomSheet';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>

      <BottomSheet />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
});
