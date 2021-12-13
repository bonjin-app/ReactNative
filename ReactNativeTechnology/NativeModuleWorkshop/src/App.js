import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import AlertModule from './Alert';
import ToastModule from './Toast';

const App = () => {
  const onPress = () => {
    // ToastModule.show('Hello World', ToastModule.SHORT);

    AlertModule.alert('Hello World');
    console.log({
      string: AlertModule.STRING_VALUE,
      number: AlertModule.NUMBER_VALUE,
    });
  };

  return (
    <SafeAreaView>
      <Button title="Press Me" onPress={onPress} />
    </SafeAreaView>
  );
};

export default App;
