import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  lsit: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
