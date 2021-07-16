import React from 'react';
import styled from 'styled-components';
import Counter from './components/Counter';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Counter />
    </Container>
  );
}
