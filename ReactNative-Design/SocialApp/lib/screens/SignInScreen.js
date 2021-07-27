import React, { useState } from 'react'
import styled from 'styled-components'
import Text from '../components/Text'

const SignInScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Main>
                <Text
                    title
                    semi
                    center={true} >Welcome back.</Text>
            </Main>

            <Auth>
                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardType="email-address"
                        onChangeText={email => setEmail(email.trim())}
                        value={email}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password.trim())}
                        value={password}
                    />
                </AuthContainer>
            </Auth>

            <SignInContainer disabled={loading}>
                {loading ? (
                    <Loading />
                ) : (
                    <Text
                        bold
                        center
                        color="#FFF"
                    >Sign In</Text>   
                )}
                
            </SignInContainer>

            <SignUp
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text
                    smail
                    center
                >New to SocialApp? <Text bold color="#8022D9">Sign Up</Text></Text>
            </SignUp>

            <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
            </HeaderGraphic>
            <StatusBar barStyle="light-content"/>
        </Container>
    )
}

export default SignInScreen

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 190px;
`;

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
    color: #8E93A1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8E93A1;
    border-bottom-width: 0.5px;
    height: 40px;
`;

const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: '#FFF',
    size: 'small',
}))``;

const SignUp = styled.TouchableOpacity`
    margin-top: 24px;
`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
    position: absolute;
    background-color: #8022D9;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    position: absolute;
    background-color: #23a6d5;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

const StatusBar = styled.StatusBar`

`;