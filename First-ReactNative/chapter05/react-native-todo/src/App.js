import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme'
import { Dimensions, StatusBar } from 'react-native';
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`
export default function App() {
  const width = Dimensions.get('window').width;

  const [isReady, setIsReady] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({});

  const _sageTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);

    } catch (e) {
      console.error(e)
    }
  }

  const _loadTasks = async () => {
    const laodedTasks = await AsyncStorage.getItem('tasks');
    setTasks(JSON.parse(laodedTasks || '{}'))
  }

  const _addTask = () => {
    const id = Date.now().toString();
    const newTaskObject = {
      [id]: { id: id, text: newTask, completed: false },
    };
    setNewTask('');
    _sageTasks({ ...tasks, ...newTaskObject });
  }

  const _deleteTask = (id) => {
    console.log(id)
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    _sageTasks(currentTasks)
  }

  const _toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    _sageTasks(currentTasks)
  }

  const _updateTask = (item) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    _sageTasks(currentTasks);
  }

  const _onBlur = () => {
    setNewTask('');
  }

  const _handleTextChange = (text) => {
    setNewTask(text);
  }

  return isReady ? (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={theme.background} />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />

        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item, i) => (
              <Task
                key={i}
                item={item}
                deleteTask={_deleteTask}
                toggleTask={_toggleTask}
                updateTask={_updateTask}
              />
            ))
          }
        </List>
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadTasks}
      onFinish={() => setIsReady(true)}
      onError={console.error}
    />
  );
}
