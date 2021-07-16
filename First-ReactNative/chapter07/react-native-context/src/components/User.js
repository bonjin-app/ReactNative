import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../contexts/UserContext'

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const User = () => {
    const { user } = useContext(UserContext)
    return (
        <StyledText>Name: {user.name}</StyledText>
    )
}

export default User
