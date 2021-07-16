import React from 'react';
import styled from 'styled-components';
import User from './components/User';
import { UserProvider } from './contexts/UserContext';
import Input from './components/Input';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <UserProvider>
      <Container>
        <User />
        <Input />
      </Container>
    </UserProvider>
  );
}
