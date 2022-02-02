import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./counter-reducer"


const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const persistedTodosString = localStorage.getItem('app-state')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))

store.subscribe( () => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})


export type AppStateType = ReturnType<typeof rootReducer>
export type AppSoreType = typeof store
