import { FC, useMemo } from "react";
import { Animated, GestureResponderEvent, PanResponderGestureState, Platform } from "react-native";
import { useScrollEnabled } from "../contexts";
import { usePanResponder, useStyle, useTransformStyle } from "../hooks";
import * as D from '../data'
import { View } from "../theme/paper";
import { Avatar } from "../components";

type Event = GestureResponderEvent
type State = PanResponderGestureState

const ios = Platform.OS == 'ios'

export type DragAvatarProps = {
    size: number,
    backgroundColor: string
}

const DragAvatar: FC<DragAvatarProps> = ({ size, backgroundColor }) => {
    const [scrollEnabled, setScrollEnabled] = useScrollEnabled()

    const transformStyle = useTransformStyle({
        translateX: 0,
        translateY: 0
    })

    const style = useStyle({
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
    })

    const avatarUrl = useMemo(() => D.randomAvatarUrl(), [])
    const panResponder = usePanResponder({})

    return (
        <View>
            <Animated.View style={[style, transformStyle]} {...panResponder.panHandlers}>
                <Avatar uri={avatarUrl} size={ 60}/>
            </Animated.View>
        </View>
    )
}