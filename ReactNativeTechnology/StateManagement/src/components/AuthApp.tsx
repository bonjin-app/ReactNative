import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useUser from '../hooks/useUser';
import useAuthActions from '../hooks/useAuthActions';

const AuthStatus = () => {
  const user = useUser();
  return (
    <View style={styles.status}>
      <Text>{user ? user.displayName : '로그인하세요'}</Text>
    </View>
  );
};

const AuthButtons = () => {
  const {authorize, logout} = useAuthActions();
  const onPressLogint = () => {
    authorize({
      id: 1,
      username: 'johndoe',
      displayName: 'John Doe',
    });
  };

  const onPressLogout = () => {
    logout();
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogint} />
      <Button title="로그아웃" onPress={onPressLogout} />
    </View>
  );
};

const AuthApp = () => {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
};

export default AuthApp;

const styles = StyleSheet.create({
  block: {flex: 1},
  status: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
