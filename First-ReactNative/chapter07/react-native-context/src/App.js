import React from 'react';
import styled from 'styled-components';
import User from './components/User';
import UserContext from './contexts/UserContext';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <UserContext.Provider value={{ name: 'GIGAS' }}>
      <Container>
        <User />
      </Container>
    </UserContext.Provider>
  );
}
