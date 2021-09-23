import React from 'react'
import styled from 'styled-components/native';
import Counter from './screens/Counter';

const Container = styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <Container>
      <Counter title="This is a Couter App" initValue={5 }/>
    </Container>
  )
}

export default App
