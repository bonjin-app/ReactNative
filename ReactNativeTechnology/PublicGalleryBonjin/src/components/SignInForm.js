import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BorderedInput from './BorderedInput';

const SignInForm = ({isSignUp, onSubmit, form, createChangeTextHandler}) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  return (
    <>
      <BorderedInput
        value={form.email}
        placeholder="이메일"
        hasMarginBottom
        onChangeText={createChangeTextHandler('email')}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <BorderedInput
        ref={passwordRef}
        placeholder="비밀번호"
        value={form.password}
        hasMarginBottom={isSignUp}
        onChangeText={createChangeTextHandler('password')}
        secureTextEntry
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (isSignUp) {
            confirmPasswordRef.current.focus();
          } else {
            onSubmit();
          }
        }}
      />
      {isSignUp && (
        <BorderedInput
          ref={confirmPasswordRef}
          value={form.confirmPassword}
          placeholder="비밀번호 확인"
          onChangeText={createChangeTextHandler('confirmPassword')}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      )}
    </>
  );
};

export default SignInForm;

const styles = StyleSheet.create({});
