import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <Box>{value => <Text>{value}</Text>}</Box>
    </View>
  );
};

function Box({children}) {
  return <View style={styles.box}>{children('Hello World')}</View>;
}

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {},
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
});
