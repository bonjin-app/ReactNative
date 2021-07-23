import React, { useRef } from 'react'
import { View, Text, Modal, Dimensions, Animated } from 'react-native'

const BottomSheet = (props) => {
    const screenHeight = Dimensions.get('screen').height;
    const panY = useRef(Animated.Value(screenHeight)).current;
    
    const _handlerDismiss = () => {

    }

    return (
        <Modal
            animated={true}
            animationType="fade"
            transparent={true}
            onRequestClose={_handlerDismiss}
        >

        </Modal>
    )
}

export default BottomSheet
