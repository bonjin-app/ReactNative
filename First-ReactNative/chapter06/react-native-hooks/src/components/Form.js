import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none',
    autoCorrect: false,
})`
    border: 1px solid #757575;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 20px;
`;

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const refName = useRef(null);
    const refEmail = useRef(null);

    useEffect(() => {
        console.log(`name: ${name}, email: ${email}\n`);
    }, [email]);

    useEffect(() => {
        console.log('\n===== Form Component Mount =====\n');
        refName.current.focus();

        return _unmount;
    }, []);

    const _unmount = () => {
        console.log('\n===== Form Component Unmount =====\n');
    };

    return (
        <>
            <StyledText>Name: {name}</StyledText>
            <StyledText>Email: {email}</StyledText>
            <StyledTextInput
                value={name}
                ref={refName}
                returnKeyType="next"
                onChangeText={text => setName(text)}
                placeholder="name"
                onSubmitEditing={() => refEmail.current.focus()}
            />
            <StyledTextInput
                value={email}
                ref={refEmail}
                returnKeyType="done"
                onChangeText={text => setEmail(text)}
                placeholder="email"
            />
        </>
    )
}

export default Form
