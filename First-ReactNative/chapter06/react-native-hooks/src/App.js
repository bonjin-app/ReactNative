import React, { useState } from 'react';
import styled from 'styled-components';
import Counter from './components/Counter';
import Form from './components/Form';
import Button from './components/Button';
import Length from './components/Length';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container>
      {/* <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(prev => !prev)}
      />
      {isVisible && <Form />} */}
      <Length />
    </Container>
  );
}
