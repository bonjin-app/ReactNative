import {
  Animated,
  Button,
  Dimensions,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Portal} from 'react-native-paper';

const BottomSheet = ({show, onDismiss, children}) => {
  const bottomSheetHeight = Dimensions.get('window').height * 0.5;
  const deviceWidth = Dimensions.get('window').width;
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: (event, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now

        console.log('onPanResponderGrant', event.nativeEvent);
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (event, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        console.log('onPanResponderMove', event.nativeEvent);

        Animated.event([null, {dx: pan.x, dy: pan.y}]);
      },
      onPanResponderRelease: (event, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded

        pan.flattenOffset();
      },
    }),
  ).current;

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeight,
            bottom: bottom,
            shadowOffset: {height: -3},
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          },
          styles.comon,
        ]}
        {...panResponder.panHandlers}>
        <View
          style={[
            styles.header,
            styles.comon,
            {position: 'relative', shadowOffset: {height: 3}},
          ]}>
          <View>
            <View
              style={{
                width: 40,
                height: 3,
                borderRadius: 1.5,
                position: 'absolute',
                top: 8,
                left: (deviceWidth - 40) / 2,
                zIndex: 10,
                backgroundColor: '#ccc',
              }}></View>
            <View
              style={{
                height: 40,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 16,
              }}>
              <Button title="X" onPress={onDismiss} />
            </View>
          </View>
        </View>
      </Animated.View>
    </Portal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderToRightRadius: 16,
    overflow: 'hidden',
  },
  header: {
    height: 50,
    backgroundColor: '#fff',
  },
  comon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 10,
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
  },
});
