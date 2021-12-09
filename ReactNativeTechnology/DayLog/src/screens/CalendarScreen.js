import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enable ? 150 : 0,
      useNativeDriver: true,
    }).start();
  }, [enable, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [{translateX: animation}],
          },
        ]}
      />
      <Button
        title="Toggle"
        onPress={() => {
          setEnable(!enable);
        }}
      />
    </View>
  );
};

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <SlideLeftAndRight />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});
