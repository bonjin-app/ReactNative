import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Box from './components/Box';
import Greeting from './components/Greeting';

const App = () => {
  const name = 'JSX';
  return (
    <SafeAreaView>
      {/* 주석 */}
      <Greeting
        name={name} // 주석
      />
      <Box rounded size="large" color="blue" />
    </SafeAreaView>
  );
};
export default App;
