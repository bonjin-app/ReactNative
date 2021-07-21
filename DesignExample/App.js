/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  NativeModules,
  Button,
} from 'react-native';

const App = () => {
  const { CalendarModule } = NativeModules;

  const onPress = () => {
    CalendarModule.calendar('testName');
  };

  return (
      <SafeAreaView>
        <Button title="Click" onPress={onPress}/>
      </SafeAreaView>
  );
};

export default App;
