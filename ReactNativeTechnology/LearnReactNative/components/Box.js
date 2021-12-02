import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Box = ({rounded, size, color}) => {
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {backgroundColor: color},
      ]}
    />
  );
};

Box.defailtProps = {
  size: 'medium',
  color: 'black',
};

const sizes = {
  smail: styles.smail,
  medium: styles.medium,
  large: styles.large,
};

export default Box;

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  smail: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});
