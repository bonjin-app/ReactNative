import {
  Animated,
  Dimensions,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const {height} = Dimensions.get('window');
const animationEndY = Math.ceil(height * 0.7);
const negativeEntY = animationEndY * -1;

let headerCount = 1;

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const App = () => {
  const [hearts, setHearts] = useState([]);

  const addHearts = () => {
    console.log('addHearts', hearts);

    setHearts([
      ...hearts,
      {
        id: headerCount++,
        right: getRandomNumber(20, 150),
      },
    ]);
  };

  const removeHeart = id => {
    console.log('removeHeart', id);
    setHearts(prev => prev.filter(f => f.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {hearts.map((item, index) => {
          return (
            <HeartContainer
              key={index}
              style={{right: item.right}}
              onComplete={() => {
                removeHeart(item.id);
              }}
            />
          );
        })}
      </View>
      <Pressable onPress={addHearts} style={styles.addButton}>
        <Image
          style={{width: 60, height: 60}}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/01/10/23/01/icon-1970474_960_720.png',
          }}
        />
      </Pressable>
    </View>
  );
};

const HeartContainer = props => {
  const {onComplete} = props;
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const yAnimation = position.interpolate({
      inputRange: [negativeEntY, 0],
      outputRange: [animationEndY, 0],
    });

    Animated.timing(position, {
      duration: 2000,
      toValue: negativeEntY,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      console.log('start callback');
      onComplete();
    });
  }, []);

  const animStyle = () => {
    return {
      transform: [{translateY: position}],
    };
  };

  return (
    <Animated.View style={[styles.heartContainer, animStyle(), props.style]}>
      <Heart />
    </Animated.View>
  );
};

const Heart = props => {
  return (
    <View {...props} style={[styles.heart, props.style]}>
      <Image
        style={{width: 48, height: 48}}
        source={{
          uri: 'https://cdn.crowdpic.net/list-thumb/thumb_l_D0542AB6BD9DB783556A53D2FC7AA930.png',
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#378AD9',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 32,
    left: 32,
  },
  heartContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'transparent',
  },
  heart: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
