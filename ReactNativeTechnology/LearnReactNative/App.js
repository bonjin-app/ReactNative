import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  const name = 'JSX';
  return (
    <SafeAreaView>
      {/* 주석 */}
      <Greeting
        name={name} // 주석
      />
    </SafeAreaView>
  );
};
export default App;
