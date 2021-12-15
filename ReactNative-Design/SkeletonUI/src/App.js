import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import Skeleton from './components/Skeleton';

const App = () => {
  const cardWidth = Dimensions.get('window').width * 0.8;
  const skeWidth = cardWidth - 32;

  return (
    <View style={styles.container}>
      <Text>asdfasfd</Text>

      <View style={[styles.card, {width: cardWidth}]}>
        <Skeleton height={40} width={40} style={{borderRadius: 20}} />
        <Skeleton
          height={(skeWidth / 16) * 9}
          width={skeWidth}
          style={{borderRadius: 8, marginTop: 16}}
        />
        <Skeleton
          height={10}
          width={skeWidth}
          style={{borderRadius: 8, marginTop: 16}}
        />
        <Skeleton
          height={10}
          width={skeWidth}
          style={{borderRadius: 8, marginTop: 8}}
        />
        <Skeleton
          height={10}
          width={skeWidth}
          style={{borderRadius: 8, marginTop: 8}}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    borderRadius: 8,
  },
});
