


export type CounterStateType = {
    value: number
    twoValue: number
    maxValue: number
    count: boolean
}

export let initialState: CounterStateType = {
    value: 0,
    twoValue: 0,
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
        case 'DEC_VALUE': {
            return {
                ...state, value: state.value - 1
            }
        }
        case 'RESET_VALUE': {
            return {
                ...state, value: state.value = 0,
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
        case 'VALUE_PLUS_TWOVALUE': {
            return {
                ...state, value: state.value + state.twoValue
            }
        }
        case 'VALUE_MINUS_TWOVALUE': {
            return {
                ...state, value: state.value - state.twoValue
            }
        }
        case 'RESET_TWO_VALUE': {
            return {
                ...state,  twoValue: state.twoValue = 0,
            }
        }
        case 'PLUS_VALUE': {
            return {
                ...state, twoValue: state.twoValue + 1
            }
        }
        case 'MINUS_VALUE': {
            return {
                ...state, twoValue: state.twoValue - 1
            }
        }
        default:
            return state;
    }
}



type IncValueType = ReturnType<typeof incValue>
export const incValue = () => ({
    type: 'INC_VALUE'
} as const)

type DecValueType = ReturnType<typeof decValue>
export const decValue = () => ({
    type: 'DEC_VALUE'
} as const)

type ResetValueType = ReturnType<typeof resetValue>
export const resetValue = () => ({
    type: 'RESET_VALUE'
} as const)

type ChangeStartValueType = ReturnType<typeof changeStartValue>
export const changeStartValue = (value: number) => ({
    type: 'CHANGE_START_VALUE', startValue: value
} as const)

type ChangeMaxValueType = ReturnType<typeof changeMaxValue>
export const changeMaxValue = (value: number) => ({
    type: 'CHANGE_MAX_VALUE', maxValue: value
} as const)


type ShowDisplayOrSetType = ReturnType<typeof showDisplayOrSet>
export const showDisplayOrSet = (count: boolean) => ({
    type: 'CHOW_DISPLAY_OR_SET', count
} as const)



type ValuePlusTwoValueType = ReturnType<typeof valuePlusTwoValue>
export const valuePlusTwoValue = () => ({
    type: 'VALUE_PLUS_TWOVALUE'
} as const)

type ValueMinusTwoValueType = ReturnType<typeof valueMinusTwoValue>
export const valueMinusTwoValue = () => ({
    type: 'VALUE_MINUS_TWOVALUE'
} as const)

type ResetTwoValueType = ReturnType<typeof resetTwoValue>
export const resetTwoValue = () => ({
    type: 'RESET_TWO_VALUE'
} as const)

type PlusValueType = ReturnType<typeof plusValue>
export const plusValue = () => ({
    type: 'PLUS_VALUE'
} as const)

type MinusValueType = ReturnType<typeof minusValue>
export const minusValue = () => ({
    type: 'MINUS_VALUE'
} as const)




type ActionType =
    IncValueType
    | ResetValueType
    | ShowDisplayOrSetType
    | ChangeMaxValueType
    | ChangeStartValueType
    | DecValueType
    | ValuePlusTwoValueType
    | ValueMinusTwoValueType
    | ResetTwoValueType
    | PlusValueType
    | MinusValueType
