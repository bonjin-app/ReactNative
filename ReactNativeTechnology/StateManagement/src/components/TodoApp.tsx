import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import useTodosActions from '../hooks/useTodosActions';
import useTodos from '../hooks/useTodos';

const BlackButton = ({onPress, title}: {onPress(): void; title: string}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
      android_ripple={{color: 'white'}}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const TodoItem = ({
  id,
  text,
  done,
}: {
  id: number;
  text: string;
  done: boolean;
}) => {
  const {remove, toggle} = useTodosActions();

  const onToggle = () => {
    toggle(id);
  };

  const onRemove = () => {
    remove(id);
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>
      <BlackButton onPress={onRemove} title={'삭제'} />
    </View>
  );
};

const Todos = () => {
  const todos = useTodos();

  return (
    <FlatList
      style={styles.todos}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} done={item.done} text={item.text} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
    />
  );
};

const TodoInput = () => {
  const [text, setText] = useState('');
  const {add} = useTodosActions();

  const onPress = () => {
    add(text);
    setText('');
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={'할일을 입력하세요'}
        value={text}
        onChangeText={setText}
      />
      <BlackButton onPress={onPress} title="등록" />
    </View>
  );
};

const TodoApp = () => {
  return (
    <SafeAreaView style={styles.block}>
      <Todos />
      <TodoInput />
    </SafeAreaView>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  block: {flex: 1},
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  todo: {flexDirection: 'row'},
  toggle: {justifyContent: 'center', flex: 1},
  doneText: {textDecorationLine: 'line-through'},
  todos: {flex: 1},
  separator: {height: 1, backgroundColor: 'black'},
  inputWrapper: {
    borderColor: 'black',
    borderToWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});
