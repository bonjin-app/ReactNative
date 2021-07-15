import React, { Fragment } from 'react';
import InlineStyle from './components/InlineStyle';
import ClassStyle from './components/ClassStyle';
import MultipleStyle from './components/MultipleStyle';
import OtherStyle from './components/OtherStyle';
import { Header, Contents, Footer } from './components/Layout';
import { View } from 'react-native';
import { viewStyles } from './components/styles';
import ShadowBox from './components/ShadowBox';

export default function App() {
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

        <View style={viewStyles.container}>
            <ShadowBox />
        </View>
    );
}
