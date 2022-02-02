import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./counter-reducer"


const rootReducer = combineReducers({
    counter: counterReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export type AppSoreType = typeof store


export const store = createStore(rootReducer, applyMiddleware(thunk))