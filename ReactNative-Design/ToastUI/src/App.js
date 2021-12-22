import React, {useRef, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Toast from './Toast';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#efefef',
      }}>
      <View style={{marginTop: 50}}>
        <Button
          title="asdfasdfasdfasdfasdf"
          onPress={() => {
            setVisible(true);
          }}
        />
      </View>
      <Toast message={'안녕하세요'} visible={visible} setVisible={setVisible} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
