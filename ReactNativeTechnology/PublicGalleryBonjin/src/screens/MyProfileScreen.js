import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconRightButton from '../components/IconRightButton';
import Profile from '../components/Profile';
import {useUserContext} from '../contexts/UserContext';

const MyProfileScreen = () => {
  const {user} = useUserContext();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: user.displayName,
      headerRight: () => (
        <IconRightButton
          name="settings"
          onPress={() => navigation.navigate('Setting')}
        />
      ),
    });
  }, [navigation, user]);

  return <Profile userId={user.id} />;
};

export default MyProfileScreen;

const styles = StyleSheet.create({});
