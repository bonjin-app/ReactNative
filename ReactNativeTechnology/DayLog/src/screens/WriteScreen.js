import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import WriteHeader from '../components/WriteHeader';

const WriteScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
    </SafeAreaView>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});
