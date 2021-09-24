import React, { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {UserContext} from '~/contexts/User';

import Button from '~/components/Button'
import Input from '~/components/Input'

const Login = () => {

    const { login } = useContext<IUserContext>(UserContext);
    
    return (
        <SafeAreaView>
            <Text>Login</Text>
            <Text>Login</Text>
            <Text>Login</Text>
            <Text>Login</Text>
            <Text>Login</Text>
            <Input />
            <Button
                style={{ marginBottom: 24 }}
                label="로그인"
                onPress={() => {
                    login('bonjin.app@gmail.com', 'password');
                }}
            />
        </SafeAreaView>
    )
}

export default Login
