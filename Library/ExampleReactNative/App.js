import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';
import AwesomeModule from 'awesome-module';

const App = () => {
  const [result, setResult] = useState(0);

  useEffect(() => {
    AwesomeModule.multiply(5, 10)
      .then(setResult);
    
  }, [])

  return (
    <>
      <Text>{result}</Text>
      <Text>{result}</Text>
      <Text>{result}</Text>
      <Text>{result}</Text>
      <Text>{result}</Text>
      <Text>{result}</Text>
      <Text>{result}</Text>
      <Text>{result}</Text>
    </>
  )
}

export default App
