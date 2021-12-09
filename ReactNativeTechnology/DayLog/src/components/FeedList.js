import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FeedListItem from './FeedListItem';

const FeedList = ({logs, onScrolledToBottom}) => {
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromButtom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    console.log('distanceFromButtom', distanceFromButtom);
    if (distanceFromButtom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  return (
    <FlatList
      style={styles.block}
      data={logs}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
};

export default FeedList;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});
