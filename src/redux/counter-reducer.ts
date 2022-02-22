


export type CounterStateType = {
    value: number
    maxValue: number
    count: boolean
}

let initialState: CounterStateType = {
    value: 0,
    maxValue: 5,
    count: true,
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionType) => {
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
    IncValueType |
    resetValueType |
    showDisplayOrSetType |
    ChangeMaxValueType |
    changeStartValueType

type IncValueType = ReturnType<typeof incValue>
export const incValue = () => ({
    type: 'INC_VALUE'
} as const)

type resetValueType = ReturnType<typeof resetValue>
export const resetValue = () => ({
    type: 'RESET_VALUE'
} as const)

type changeStartValueType = ReturnType<typeof changeStartValue>
export const changeStartValue = (value: number) => ({
    type: 'CHANGE_START_VALUE', startValue: value
} as const)

type ChangeMaxValueType = ReturnType<typeof changeMaxValue>
export const changeMaxValue = (value: number) => ({
    type: 'CHANGE_MAX_VALUE', maxValue: value
} as const)


type showDisplayOrSetType = ReturnType<typeof showDisplayOrSet>
export const showDisplayOrSet = (count: boolean) => ({
    type: 'CHOW_DISPLAY_OR_SET', count
} as const)
