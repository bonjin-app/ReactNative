import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import SearchContext from '../contexts/SearchContext';

const SearchScreen = () => {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(f =>
          [f.title, f.body].some(text => text.includes(keyword)),
        );

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
