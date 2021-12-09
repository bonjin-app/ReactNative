import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>PublicGallery</Text>
      <View style={styles.form}>
        <BorderedInput placeholder="이메일" hasMarginBottom />
        <BorderedInput placeholder="비밀번호" />
        <View style={styles.buttons}>
          <CustomButton title="로그인" hasMarginBottom />
          <CustomButton title="회원가입" theme="secondary" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});
