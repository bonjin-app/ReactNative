import React from 'react'
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    background-color: #333333;
`;

const InputField = styled.TextInput`
    flex: 1;
    color: white;
`;

interface Props {
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    style?: Object;
    clearMode?: boolean;
    onChangeText?: (text: string) => void;
}

const Input = ({
    placeholder,
    keyboardType,
    secureTextEntry,
    style,
    clearMode,
    onChangeText,
}: Props) => {
    return (
        <Container style={style}>
            <InputField
                selectionColor="#FFF"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType ? keyboardType : 'default'}
                autoCapitalize="none"
                autoCorrect={false}
                allowFontScaling={false}
                placeholderTextColor="#FFF"
                clearButtonMode={clearMode ? 'while-editing' : 'never'}
                onChangeText={onChangeText}
            />
        </Container>
    )
}

export default Input
