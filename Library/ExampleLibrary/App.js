import React, { useEffect, useState } from 'react'
import AwesomeModule from 'awesome-native'
import { Text } from 'react-native'

const App = () => {
  const [result, setResult] = useState(0)

  useEffect(() => {
    AwesomeNative.multiply(3, 52)
                .then(setResult);
  }, [])

  return (
    <div>
      import AwesomeNative from 'awesome-native';
      <Text>Result: {result}</Text>
    </div>
  )
}

export default App
