import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { loadState, saveState } from "../utils/localstorage-utils"
import { counterReducer } from "./counter-reducer"


const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppSoreType = typeof store
