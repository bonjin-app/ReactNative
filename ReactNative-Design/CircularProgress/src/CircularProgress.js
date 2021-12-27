import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const CircularProgress = ({progress = 0}) => {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const animateProgress = useRef(toValue => {
    Animated.spring(animatedProgress, {
      toValue: toValue,
      useNativeDriver: true,
    }).start();
  }).current;

  useEffect(() => {
    animateProgress(progress);
  }, [animateProgress, progress]);

  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorVisibility = animatedProgress.interpolate({
    inputRange: [0, 49, 50, 100],
    outputRange: [0, 0, 1, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.circularContainer}>
        <Animated.View
          style={[
            styles.indicator,
            {transform: [{rotate: firstIndicatorRotate}]},
          ]}
        />
        <View style={styles.coverIndicator} />
        <Animated.View
          style={[
            styles.indicator,
            {
              transform: [{rotate: secondIndicatorRotate}],
              opacity: secondIndicatorVisibility,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default CircularProgress;

const styles = StyleSheet.create({
  container: {},
  circularContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderColor: '#a0a0a1',
    borderRadius: 100,
    borderWidth: 15,
    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },
  indicator: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 15,
    borderLeftColor: '#0085FF',
    borderTopColor: '#0085FF',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  coverIndicator: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 15,
    borderLeftColor: '#a0a0a1',
    borderTopColor: '#a0a0a1',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
});
