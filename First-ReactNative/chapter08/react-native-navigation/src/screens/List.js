import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`

const items = [
    { _id: 1, name: 'React Native' },
    { _id: 2, name: 'React Navigation' },
    { _id: 3, name: 'GIGAS' },
]

const List = ({ navigation }) => {

    const _onPress = (item) => {
        navigation.navigate('Detail', { id: item._id, name: item.name })
    };

    return (
        <Container>
            <StyledText>List</StyledText>
            {items.map((m) => (
                <Button
                    key={m._id}
                    title={m.name}
                    onPress={() => _onPress(m)}
                />
            ))}
        </Container>
    )
}

export default List
