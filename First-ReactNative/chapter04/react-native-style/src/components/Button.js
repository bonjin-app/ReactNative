import React from 'react'
import styled from 'styled-components'
import { StyleSheet } from 'react-native';

const ButtonContainer = styled.TouchableOpacity`
    background-color: #9b59b6;
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;

const Button = (props) => {
    return (
        <ButtonContainer>
            <Title>
                {props.title}
            </Title>
        </ButtonContainer>
    )
}

// styled와 동일한 style
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9b59b6',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginVertical: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff'
    }
})

export default Button
