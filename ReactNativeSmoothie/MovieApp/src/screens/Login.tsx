import React, { useContext } from 'react'
import { Text, SafeAreaView, Linking } from 'react-native'
import styled from 'styled-components/native';
import {UserContext} from '~/contexts/User';

import Button from '~/components/Button'
import Input from '~/components/Input'
import { StackNavigationProp } from '@react-navigation/stack';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.View`
  width: 100%;
  padding: 40px;
`;

const PasswordReset = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {

    const { login } = useContext<IUserContext>(UserContext);
    
    return (
        <Container>
            <FormContainer>
                <Input
                    style={{ marginBottom: 16 }}
                    placeholder="이메일" />
                <Input
                    style={{marginBottom: 16}}
                    placeholder="비밀번호"
                    secureTextEntry={true} />
                <Button
                    style={{ marginBottom: 24 }}
                    label="로그인"
                    onPress={() => {
                        login('bonjin.app@gmail.com', 'password');
                    }} />
                    
                <PasswordReset
                    onPress={() => {
                        Linking.openURL('https://dev-yakuza.github.io/ko/');
                    }}>
                    비밀번호 재설정
                </PasswordReset>
            </FormContainer>
        </Container>
    )
}

export default Login
