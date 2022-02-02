


type InitialStateType = {
    value: number
    maxValue: number
    count: boolean
}

let initialState: InitialStateType = {
    value: 0,
    maxValue: 5,
    count: true,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INC_VALUE': {
            return {
                ...state, value: state.value + 1
            }
        }
        case 'RESET_VALUE': {
            return {
                ...state, value: state.value = 0
            }
        }
        case 'CHANGE_MAX_VALUE': {
            return {
                ...state, maxValue: state.maxValue = action.maxValue
            }
        }
        case 'CHANGE_START_VALUE': {
            return {
                ...state, value: state.value = action.startValue
            }
        }
        case 'CHOW_DISPLAY_OR_SET': {
            return {
                ...state, count: state.count = action.count
            }
        }

        default:
            return state;
    }
}


type ActionType =
    IncValueACType |
    resetValueACType |
    ChangeValueACType |
    showDisplayOrSetACType |
    ChangeMaxValueACType |
    changeStartValueACType

type IncValueACType = ReturnType<typeof incValueAC>
export const incValueAC = () => ({
    type: 'INC_VALUE'
} as const)

type resetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = () => ({
    type: 'RESET_VALUE'
} as const)

type ChangeValueACType = ReturnType<typeof changeValueAC>
export const changeValueAC = (value: number) => ({
    type: 'CHANGE_VALUE', value
} as const)


type changeStartValueACType = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (value: number) => ({
    type: 'CHANGE_START_VALUE', startValue: value
} as const)

type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (value: number) => ({
    type: 'CHANGE_MAX_VALUE', maxValue: value
} as const)


type showDisplayOrSetACType = ReturnType<typeof showDisplayOrSetAC>
export const showDisplayOrSetAC = (count: boolean) => ({
    type: 'CHOW_DISPLAY_OR_SET', count
} as const)
