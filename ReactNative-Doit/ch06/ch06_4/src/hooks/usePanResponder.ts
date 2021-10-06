import React, { useMemo } from "react"
import { GestureResponderEvent, PanResponder, PanResponderCallbacks, PanResponderGestureState, PanResponderInstance } from "react-native"

type Event = GestureResponderEvent
type State = PanResponderGestureState

const defaultCallback = {
    onStartShouldSetPanResponder: (e: Event, s: State) => true,
    onMoveShouldSetPanResponder: (e: Event, s: State) => true,
}

export const usePanResponder = (callbacks: PanResponderCallbacks, deps: any[] = []): PanResponderInstance => {
    const panResponder = useMemo<PanResponderInstance>(() => {
        return PanResponder.create({
            ...defaultCallback,
            ...callbacks
        })
    }, deps)

    return panResponder
}