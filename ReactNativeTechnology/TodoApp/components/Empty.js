import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>할일이 없습니다.</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
