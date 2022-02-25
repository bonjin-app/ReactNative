import {
  Animated,
  Dimensions,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export const ANIMATED = {
  HIDDEN: -350,
  FULL_OPEN: -100,
  VISIBLE: -300,
};
const STARTING_POSITION = ANIMATED.HIDDEN - ANIMATED.FULL_OPEN;

const BottomSheet = () => {
  const animatedPosition = new Animated.Value(0);

  function animateMove(toValue) {
    Animated.spring(animatedPosition, {
      toValue,
      tension: 120,
      useNativeDriver: false,
    }).start();
  }

  function movementValue(gestureState) {
    return (
      Dimensions.get('window').height - gestureState.moveY + ANIMATED.VISIBLE
    );
  }

  function onMoveShouldSetPanResponder(_, gestureState) {
    return gestureState.dy >= 10 || gestureState.dy <= -10;
  }

  function onPanResponderMove(_, gestureState) {
    const toValue = Math.min(0, movementValue(gestureState));

    animateMove(toValue);
  }

  function onPanResponderRelease(_, gestureState) {
    const isMovedMoreThenThird =
      movementValue(gestureState) < ANIMATED.HIDDEN / 3;
    const toValue = isMovedMoreThenThird ? STARTING_POSITION : 0;

    animateMove(toValue);
  }

  const panGesture = PanResponder.create({
    onPanResponderMove,
    onPanResponderRelease,
    onMoveShouldSetPanResponder,
    onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
  });

  return (
    <Animated.View style={[styles.container, {bottom: animatedPosition}]}>
      <View style={styles.gestureArea} {...panGesture.panHandlers}>
        <View style={styles.pullItem} />
      </View>

      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Your awesome content</Text>
      </SafeAreaView>
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: Dimensions.get('window').width,
    height: Math.abs(ANIMATED.HIDDEN),
    marginBottom: ANIMATED.HIDDEN - ANIMATED.VISIBLE,
    paddingBottom: Math.abs(ANIMATED.FULL_OPEN),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  gestureArea: {
    width: Dimensions.get('window').width,
    height: 40,
    marginTop: -10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pullItem: {
    width: 40,
    height: 5,
    borderRadius: 20,
    backgroundColor: '#C5B7AF',
  },
  content: {
    marginVertical: 30,
    paddingHorizontal: 10,
    height: '100%',
  },
});
