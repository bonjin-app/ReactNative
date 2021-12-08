import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';

const App = () => {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
