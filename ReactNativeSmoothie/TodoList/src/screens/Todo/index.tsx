import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import AddTodo from '../AddTodo';
import TodoListView from '../TodoListView';

const Container = styled.View`
    flex: 1;
`;

const Todo = () => {
    return (
        <Container>
            <TodoListView />
            <AddTodo />
        </Container>
    )
}

export default Todo
