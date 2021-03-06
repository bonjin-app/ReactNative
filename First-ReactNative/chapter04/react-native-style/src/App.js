import React, { Fragment, useState } from 'react';
import InlineStyle from './components/InlineStyle';
import ClassStyle from './components/ClassStyle';
import MultipleStyle from './components/MultipleStyle';
import OtherStyle from './components/OtherStyle';
import { Header, Contents, Footer } from './components/Layout';
import { View, Switch } from 'react-native';
import { viewStyles } from './components/styles';
import ShadowBox from './components/ShadowBox';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import { theme, lightTheme, darkTheme } from './theme';

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background}
    align-items: center;
    justify-content: center;
`;
export default function App() {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);

    return (

        // <Fragment>
        //     {/* <InlineStyle /> */}
        //     {/* <ClassStyle /> */}
        //     {/* <MultipleStyle /> */}
        //     <OtherStyle />
        // </Fragment>

        // <View style={viewStyles.container}>
        //     <Header />
        //     <Contents />
        //     <Footer />
        // </View>

        // <View style={viewStyles.container}>
        //     <ShadowBox />
        // </View>

        // <Container>
        //     <Button title="GIGAS" />
        //     <Button title="React Native" />
        // </Container>

        // <Container>
        //     <Button title="GIGAS" />
        //     <Button title="React Native" />
        //     <Input borderColor="#3498db" />
        //     <Input borderColor="#9b59b6" />
        // </Container>

        // <ThemeProvider theme={theme}>
        //     <Container>
        //         <Button title="GIGAS" />
        //         <Button title="React Native" />
        //         <Input borderColor="#3498db" />
        //         <Input borderColor="#9b59b6" />
        //     </Container>
        // </ThemeProvider>

        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                <Button title="GIGAS" />
                <Button title="React Native" />
                <Input borderColor="#3498db" />
                <Input borderColor="#9b59b6" />
            </Container>
        </ThemeProvider>
    );
}

