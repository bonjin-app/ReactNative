import React, { useState } from 'react'
import styled from 'styled-components/native';
import Button from '~/components/Button';

const Container = styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = styled.Text`
    font-size: 24px;
`;

const CountContainer = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const CountLabel = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
    title?: string;
    initValue: number;
}

interface State {
    count: number;
}

class Counter extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        console.log('constructor');

        this.state = {
            count: props.initValue,
        }
    }

    render() {

        const { title } = this.props;
        const { count } = this.state;

        return (
            <Container>
                {title && (
                    <TitleContainer>
                        <TitleLabel>{title}</TitleLabel>
                    </TitleContainer>
                )}
                <CountContainer>
                    <CountLabel>{count}</CountLabel>
                </CountContainer>
                <ButtonContainer>
                    <Button iconName="plus" onPress={() => this.setState({ count: count + 1 })}/>
                    <Button iconName="minus" onPress={() => this.setState({ count: count - 1 })}/>
                </ButtonContainer>
            </Container>
        )
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        console.log('getDerivedStateFromProps');

        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
        console.log('getSnapshotBeforeUpdate');

        return {
            testData: true,
        }
    }

    componentDidUpdate(prevProps: Props, prevState: State, snapshot: ISnapshot) {
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate(prevProps: Props, prevState: State) {
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({
            error: true,
        });
    }
}

export default Counter
