import { ComponentProps, createContext, FC, useContext } from "react"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

export type FocusContextType = {}
const defaultFocusContext = {}
const AutoFocusContext = createContext<FocusContextType>(defaultFocusContext)
export type AutoFocusProviderProps = ComponentProps<typeof KeyboardAwareScrollView>

export const AutoFocusProvider: FC<AutoFocusProviderProps> = ({ children, ...props }) => {
    const value = {

    }

    return (
        <AutoFocusContext.Provider value={value}>
            {children}
        </AutoFocusContext.Provider>
    )
}

export const useAutoFocus = () => {
    const value = useContext(AutoFocusContext)
    return value
}