import { Animated } from 'react-native';
import { useMemo } from "react"

const makeArray = (length: number) => new Array(length).fill(null)

export const useAnimatedValues = (length: number, initialValue: number = 0) => {
    return useMemo(() => 
        makeArray(length).map((notUsed) => new Animated.Value(initialValue))
    , [])
}