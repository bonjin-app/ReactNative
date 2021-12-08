import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingWriteButton = () => {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{color: 'white'}}>
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default FloatingWriteButton;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    // iOS 전용 shadow
    shadowColor: '#4D4D4D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // 안드로이드 전용
    elevation: 5,
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});
