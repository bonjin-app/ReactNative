import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme'
import { Dimensions, StatusBar } from 'react-native';
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';

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
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    '1': { id: '1', text: 'GIGAS', completed: false },
    '2': { id: '2', text: 'React Native', completed: true },
    '3': { id: '3', text: 'React Native Sample', completed: false },
    '4': { id: '4', text: 'Edit TODO Item', completed: false },
  });

  const _addTask = () => {
    const id = Date.now().toString();
    const newTaskObject = {
      [id]: { id: id, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
  }

  const _deleteTask = (id) => {
    console.log(id)
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks)
  }

  const _handleTextChange = (text) => {
    setNewTask(text);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={theme.background} />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />

        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item, i) => (
              <Task key={i} item={item} deleteTask={_deleteTask} />
            ))
          }
        </List>
      </Container>
    </ThemeProvider>
  );
}
