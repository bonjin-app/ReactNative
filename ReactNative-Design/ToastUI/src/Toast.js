import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, SafeAreaView, StyleSheet, Text} from 'react-native';

const Toast = ({message, visible, setVisible, duration = 3000}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const timerRef = useRef(null);

  useEffect(() => {
    console.log('visible', visible);
    if (visible) {
      showToast();
    } else {
      console.log('timer', timerRef.current);
      clearTimeout(timerRef.current);
    }
  }, [visible, showToast]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const showToast = useCallback(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      hideToast();
    });
  }, [animation, hideToast]);

  const hideToast = useCallback(() => {
    timerRef.current = setTimeout(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
      });
    }, duration);
  }, [animation, duration, setVisible]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: animation,
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          },
        ]}>
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer: {
    justifyContent: 'center',
    backgroundColor: 'red',
    marginHorizontal: 32,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginBottom: 50,
    borderRadius: 24,
  },
  text: {
    fontSize: 15,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
