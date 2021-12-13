import {useRoute} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PostCard from '../components/PostCard';

const PostScreen = () => {
  const route = useRoute();
  const {post} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <PostCard
        user={post.user}
        photoURL={post.photoURL}
        description={post.description}
        createdAt={post.createdAt}
        id={post.id}
      />
    </ScrollView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
});
