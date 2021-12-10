import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import PostCard from '../components/PostCard';
import {getPosts} from '../lib/posts';

const FeedScreen = () => {
  const [posts, setPosts] = useState(null);

  console.log('posts', posts);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});

const renderItem = ({item}) => (
  <PostCard
    createdAt={item.createdAt}
    description={item.description}
    id={item.id}
    user={item.user}
    photoURL={item.photoURL}
  />
);
