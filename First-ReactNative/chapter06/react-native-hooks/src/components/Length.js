import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyleText = styled.Text`
    font-size: 24px;
`

const getLength = (text) => {
    console.log(`Target Text: ${text}`);
    return text.length;
}

const list = ['Javascript', 'Expo', 'Expo', 'React Native']

let idx = 0;
const Length = () => {
    const [text, setText] = useState(list[0]);
    // const [length, setLength] = useState('');
    const length = useMemo(() => getLength(text), [text]);

    const _onPress = () => {
        // setLength(getLength(text))
        // ++idx;
        // if (idx < list.length) setText(list[idx]);

        ++idx;
        if (idx < list.length) setText(list[idx]);
    }

    return (
        <>
            <StyleText>Text: {text}</StyleText>
            <StyleText>Length: {length}</StyleText>
            <Button title="Get Length" onPress={_onPress} />
        </>
    )
}

export default Length
