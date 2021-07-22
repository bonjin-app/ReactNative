import React, { Fragment, useState } from 'react'
import { Text, View } from 'react-native'
import Intro from './components/Intro'
import Home from './components/Home'

const App = () => {
    const [showIntro, setShowIntro] = useState(true);

    const _handleIntroFinish = () => {
        setShowIntro(false);
    }

    return (
        <Fragment>
            {showIntro && <Intro handleDone={_handleIntroFinish} />}
            {!showIntro && <Home />}
        </Fragment>
    )
}

export default App;