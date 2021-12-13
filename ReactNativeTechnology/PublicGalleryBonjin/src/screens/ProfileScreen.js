import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Profile from '../components/Profile';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId, displayName} = route.params ?? {};

  useEffect(() => {
    navigation.setOptions({
      title: displayName,
    });
  }, [navigation, displayName]);

  return <Profile userId={userId} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({});
