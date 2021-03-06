import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconRightButton = ({name, color, onPress}) => {
  return (
    <View style={styles.block}>
      <Pressable
        style={({pressed}) => [
          styles.circle,
          Platform.OS === 'ios' &&
            pressed && {
              opacity: 0.3,
            },
        ]}
        android_ripple={{color: '#EEE'}}
        onPress={onPress}>
        <Icon name={name} color={color} size={24} />
      </Pressable>
    </View>
  );
};

IconRightButton.defaultProps = {
  color: '#6200EE',
};

export default IconRightButton;

const styles = StyleSheet.create({
  block: {
    marginRight: -8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  circle: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
