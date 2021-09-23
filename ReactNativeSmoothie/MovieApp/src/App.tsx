import React from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components/native';

const ScrollView = styled.ScrollView`
  background-color: ${Colors.white};
`;

const Body = styled.View`
  background-color: ${Colors.white};
`;

const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0px 24px;
`;

const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = styled.Text`
  font-weight: 700;
`;

interface Props { }

const App = ({ }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Header />
          <Body>
            <SectionContainer>
              <SectionDescription>Step One</SectionDescription>
              <SectionDescription>
                Edit <HighLight>App.js</HighLight> to Change this screen and then come back to see your edits.
              </SectionDescription>
            </SectionContainer>

            <SectionContainer>
              <SectionDescription>See your Changes</SectionDescription>
              <SectionDescription><ReloadInstructions/></SectionDescription>
            </SectionContainer>

            <SectionContainer>
              <SectionDescription>Debug</SectionDescription>
              <SectionDescription><DebugInstructions/></SectionDescription>
            </SectionContainer>

            <SectionContainer>
              <SectionDescription>Learn More</SectionDescription>
              <SectionDescription>Read the docs to discover what to do next:</SectionDescription>
            </SectionContainer>

            <LearnMoreLinks/>
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App
