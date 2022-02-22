import {Button, StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import BottomSheet from './BottomSheet';
import {Provider} from 'react-native-paper';

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <Provider>
      <View style={styles.container}>
        <Button onPress={() => setShow(true)} title="Show Bottom Sheet" />
        <BottomSheet show={show} onDismiss={() => setShow(false)} />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
