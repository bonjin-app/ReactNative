import {useNavigation} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Avatar from './Avatar';

const PostCard = ({user, photoURL, description, createdAt, id}) => {
  const date = useMemo(() => {
    return createdAt ? new Date(createdAt._seconds * 1000) : new Date();
  }, [createdAt]);

  const navigation = useNavigation();

  const onOpenProfile = () => {
    navigation.navigate('Profile', {
      userId: user.id,
      displayName: user.displayName,
    });
  };

  return (
    <View style={styles.block}>
      <View style={[styles.head, styles.paddingBlock]}>
        <Pressable style={styles.profile} onPress={onOpenProfile}>
          <Avatar source={user.photoURL && {uri: user.photoURL}} />
          <Text style={styles.displayName}>{user.displayName}</Text>
        </Pressable>
      </View>
      <Image
        source={{uri: photoURL}}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="cover"
      />
      <View style={styles.paddingBlock}>
        <Text style={styles.description}>{description}</Text>
        <Text date={date} style={styles.date}>
          {date.toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  block: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  image: {
    backgroundColor: '#BDBDBD',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  date: {
    color: '#757575',
    fontSize: 12,
    lineHeight: 18,
  },
  paddingBlock: {
    paddingHorizontal: 16,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});