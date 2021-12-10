import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from './CustomButton';

const SignInButtons = ({isSignUp, onSubmit}) => {
  const navigation = useNavigation();

  const primaryTitle = isSignUp ? '회원가입' : '로그인';
  const secondaryTitle = isSignUp ? '로그인' : '회원가입';

  const onSecondaryButtonPress = () => {
    if (isSignUp) {
      navigation.goBack();
    } else {
      navigation.push('SignIn', {isSignUp: true});
    }
  };

  return (
    <View style={styles.buttons}>
      <CustomButton title={primaryTitle} onPress={onSubmit} hasMarginBottom />
      <CustomButton
        title={secondaryTitle}
        theme="secondary"
        onPress={onSecondaryButtonPress}
      />
    </View>
  );
};

export default SignInButtons;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 64,
  },
});
