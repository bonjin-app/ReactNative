import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from 'react-native';
import { Image, Input } from '../components';
import { images } from '../utils/images';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 20px;
`

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    return (
        <Container>
            <Image
                url={images.logo}
                imageStyle={{ borderRadius: 8 }}
            />
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={() => passwordRef.current.focus()}
                placeholder="Email"
                returnKeyType="next"
            />

            <Input
                ref={passwordRef}
                label="Password"
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={() => { }}
                placeholder="Password"
                returnKeyType="done"
                isPassword={true}
            />

        </Container>
    )
}

export default Login
