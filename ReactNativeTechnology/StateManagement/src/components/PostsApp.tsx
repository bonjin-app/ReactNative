import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import usePosts from '../hooks/usePosts';

const PostsApp = () => {
  const {data, loading, refetch} = usePosts();

  return (
    <SafeAreaView style={styles.block}>
      {data ? (
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <ActivityIndicator size="large" style={styles.loading} />
      )}
      <Button title="새로고침" onPress={refetch} disabled={loading} />
    </SafeAreaView>
  );
};

export default PostsApp;

const styles = StyleSheet.create({
  block: {flex: 1},
  list: {flex: 1},
  item: {padding: 8},
  separator: {height: 1, backgroundColor: 'black'},
  loading: {flex: 1},
});
