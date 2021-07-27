import React from 'react'
import styled from 'styled-components'
import { StyleSheet, Text, View } from 'react-native'

const SignInScreen = () => {
    return (
        <Container>
            <Main></Main>
            <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
            </HeaderGraphic>
            <StatusBar barStyle="light-content"/>
        </Container>
    )
}

export default SignInScreen

const styles = StyleSheet.create({});

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View``;

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