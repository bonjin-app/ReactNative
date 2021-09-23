import React from 'react'
import styled from 'styled-components/native';

import { TodoListContextProvider } from './contexts/TodoListContext';
import Todo from './screens/Todo';

const Container = styled.View`
  flex: 1;
  background-color: #EEE;
`;

interface Props { }

const App = ({ }: Props) => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo/>
      </Container>
    </TodoListContextProvider>
  )
}

export default App
