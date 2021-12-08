import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

const FeedsScreen = () => {
  const value = useContext(LogContext);
  return (
    <View style={styles.block}>
      <Text>{value}</Text>
    </View>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {},
});
