import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        style={styles.image}
        source={require('../assets/images/young_and_happy.png')}
        // source={{uri: 'https://via.placeholder.com/150'}}
        resizeMode="contain"
      />
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
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
